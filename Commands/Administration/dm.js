
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'dm',
    category: "administration",
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'dm',
    examples: ['dm'],
    description: 'dm',

     /**
     * 
     * @param {Client} client 
     * @param {ChatInputCommandInteraction} interaction 
     */
  
    async execute(client, interaction) {

        const dmEmbed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle(`*__Message d'invitation sur le serveur fini__*`)
            .setThumbnail('https://cdn.discordapp.com/icons/1021157150522875924/cd428148b6dcfd3f24c33e583cb2e19d.png?size=256')
            .setDescription(`\`5\` Message a été envoiyer ! du monde va arivée \:)`)
            .setTimestamp();

        await interaction.reply({ embeds: [dmEmbed] })
    },
};