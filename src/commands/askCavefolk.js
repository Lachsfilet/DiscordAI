const { SlashCommandBuilder } = require("discord.js");
const prompt = require("../util/prompt");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cavefolk")
    .setDescription("Ask the CavefolkAI")
    .addStringOption((option) =>
      option
        .setName("prompt")
        .setDescription("Add a prompt for the AI")
        .setRequired(true)
    ),

  async execute(interaction) {
    const res = await prompt.makePrompt(
      interaction.options.getString("prompt"),
      "Answer like a caveman."
    );
    await interaction.reply(res.output_text);
  },
};
