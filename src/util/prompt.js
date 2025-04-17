const OpenAI = require("openai");
const client = new OpenAI({ apiKey: process.env.OpenAI_API });

async function makePrompt(prompt, extraPrompt) {
  return await client.responses.create({
    model: "gpt-4.1-nano",
    input: extraPrompt ? `${extraPrompt}: ${prompt}` : prompt,
  });
}

module.exports = {
  makePrompt,
};
