module.exports = {
    name: "aah",
    description: "Permet la création d'un inventaire au nouveau membre",
    permissions: ['SEND_MESSAGES'],
    usage: 'aah',
    examples: ["aah"],
    category: "economy",
    /**
     * 
     * @param {ChatInputCommandInteraction} client 
     * @param {Client} interaction 
     */
    async execute(client, interaction) {
        if (interaction.user.id !== "923672192103907398") return interaction.reply({ content: "tu n'a pas la perm", ephemeral: true })
        await interaction.guild.members.cache.forEach(async (u) => {
            await client.economy.createProfile(u.id)
        })
        await interaction.reply({ content: "La commands a bien été excuter !", ephemeral: true })
    }
};