const { Client, ChatInputCommandeInteraction, EmbedBuilder } = require('discord.js');
const config = require('../../config')
module.exports = {
    name: 'help',
    description: 'help',
    category: 'information',
     /**
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(client, interaction) {
        const categories = [];
        const commands = client.commands;
        const cmdArray = [];

        commands.forEach(command => {
            if(!categories.includes(command.category)) {
                categories.push(command.category)
            }         
        })

        const embed = new EmbedBuilder()
        .setTitle(`Page d'aide de ${client.user.username}`)
        .setColor('0099ff')
        .setFooter({ text: "Commande Help", iconURL: config.logo })
        .setTimestamp()
        categories.sort().forEach((cat) => {
            const c = commands.filter((cmd) => cmd.category === cat);
            let cmdCat = {
                name: cat + " - (" + c.size + ")",
                value: c.map((cmd) => "`" + cmd.name + "`").join(", ")
            }

            cmdArray.push(cmdCat)
        })

        embed.addFields(cmdArray);
        interaction.reply({ embeds: [embed]})
    }
} 