
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'formulaire',
    category: "administration",
    description: 'XXX',

     /**
     * 
     * @param {Client} client 
     * @param {ChatInputCommandInteraction} interaction 
     */
  
    async execute(client, interaction) {

        const tacheEmbed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('*__Formulaire de recrutement__*')
            .setURL('https://docs.google.com/forms/d/e/1FAIpQLSfhCUb-g7Z1hcKcwvdDwbt8_WrZa2EIn7NTM4zsinz9IJB6uw/viewform')
            .setThumbnail('https://cdn.discordapp.com/icons/1021157150522875924/cd428148b6dcfd3f24c33e583cb2e19d.png?size=256')
            .setDescription(`Appuie sur \`formulaire de recrutement\``)
            .setTimestamp();

        await interaction.reply({ embeds: [tacheEmbed] })
    },
};