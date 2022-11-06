const { Client, EmbedBuilder } = require('discord.js')

module.exports = {
    name: 'serverlist',
    category: "administration",
    permissions: ["Administrateur"],
    ownerOnly: true,
    usage: "serverlist",
    examples: ["serverlist"],
    description: "Listes des serveurs",

    /**
     * @param {Client} client
     * @param {interaction} interaction
     */
    async execute(client, interaction) {
        if (interaction.user.id !== '742321508717690911') return interaction.reply({ content: ":x: | Tu ne peux pas faire cette commande !", ephemeral: true });
        let guildsCount = await client.guilds.fetch()
        let userCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);
        let embed = new EmbedBuilder()
            .setTitle("Liste de serveur")
            .setDescription(client.guilds.cache.map((g) => `\`${g.name}\` | \`${g.memberCount} membres\``).join("\n"))
            .addFields(
                { name: 'Nombres de serveurs :', value: `${guildsCount.size}` }
            )
            .addFields(
                { name: 'Nombres de Membres :', value: `${userCount}` }
            )

        interaction.reply({ embeds: [embed], ephemeral: false })
    }

}
