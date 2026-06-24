const axios = require("axios");

async function callAI(model, text, memory, apiKey) {
  try {
    const res = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model,
        messages: [
          { role: "system", content: "Kamu AI asisten yang natural dan jelas." },
          { role: "user", content: `MEMORY:\n${memory}\n\nUSER:\n${text}` }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        }
      }
    );

    return res.data.choices[0].message.content;
  } catch {
    return null;
  }
}

module.exports = { callAI };
