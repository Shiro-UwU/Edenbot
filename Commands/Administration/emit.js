const { Client, ChatInputCommandInteraction, ApplicationCommandOptionType } = require("discord.js")

module.exports = {
    name: "emit",
    description: "emit event",
    category: "administration",
    /**
     * 
     * @param {Client} client 
     * @param {ChatInputCommandInteraction} interaction 
     */

    async execute(client, interaction) {
        await client.emit("guildMemberAdd", interaction.member)
        await interaction.reply({content: `évènement émits !`, ephemeral: true })
    }
}