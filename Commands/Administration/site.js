//site : https://edenrp.wordpress.com/


const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'siteweb',
    category: "administration",
    description: 'Le site web du serveur',

     /**
     * 
     * @param {Client} client 
     * @param {ChatInputCommandInteraction} interaction 
     */
  
    async execute(client, interaction) {

        const siteEmbed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('*__Site web__*')
            .setURL('https://edenrp.wordpress.com/')
            .setThumbnail('https://cdn.discordapp.com/icons/1021157150522875924/cd428148b6dcfd3f24c33e583cb2e19d.png?size=256')
            .setDescription(`Appuie sur \`Site web\``)
            .setTimestamp();

        await interaction.reply({ embeds: [siteEmbed] })
    },
};