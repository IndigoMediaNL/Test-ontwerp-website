/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from "./constants";

const app = express();
const PORT = 3000;

app.use(express.json());

const getSystemInstruction = () => {
  const productContext = PRODUCTS.map(p => 
    `- ${p.name} (€${p.price}): ${p.description}. Features: ${p.features.join(', ')}`
  ).join('\n');

  return `Je bent de AI Concierge voor "De Babyconsultant", opgericht door Claudia Lemmens (gediplomeerd HBO kinderverpleegkundige).
  Je toon is warm, vederlicht, begripvol, geruststellend, liefderijk en professioneel. Spreek met empathie voor de vermoeide ouder.

  Hier is een overzicht van onze diensten, consulten en gidsen:
  ${productContext}
  
  Regels:
  - Antwoord ALTIJD in het Nederlands.
  - Geef ouders zacht, responsief baby-advies over rust, voeding, slaap, baby-signalen, darmkrampjes en de ontwikkeling in het eerste jaar.
  - Verwijs warm naar Claudia's diensten (bijv. "Basis Baby & Slaapconsult" of "Telefonisch Rust & Ritme Consult") als de ideale volgende stap.
  - Houd antwoorden uiterst beknopt (maximaal 3 zinnen) zodat het makkelijk leesbaar is in ons kleine chatvenster.
  - Spreek over "Claudia" als de verpleegkundige/babyconsultant die ze persoonlijk zal begeleiden.`;
};

// API routes go here FIRST
app.post("/api/chat", async (req, res) => {
  try {
    const { history, newMessage } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("Missing GEMINI_API_KEY environment variable.");
      return res.status(500).json({ error: "Ik kan momenteel geen verbinding maken met de slaapgids-database. (Geen API-sleutel ingesteld)" });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    const chat = ai.chats.create({
      model: 'gemini-3.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: (history || []).map((h: any) => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return res.json({ text: result.text });

  } catch (error: any) {
    console.error("Gemini API Error details:", error);
    return res.status(500).json({ 
      error: "Mijn excuses, jonge ouder. Het is me momenteel even niet mogelijk om de slaapgidsen te raadplegen. Probeer het dadelijk opnieuw." 
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
