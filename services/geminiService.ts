/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ history, newMessage }),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.text;
  } catch (error: any) {
    console.error("Service API Error:", error);
    return "Mijn excuses, jonge ouder. Het is me momenteel even niet mogelijk om de slaapgidsen te raadplegen. Probeer het dadelijk opnieuw.";
  }
};
