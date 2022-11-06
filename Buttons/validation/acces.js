const { EmbedBuilder } = require('discord.js')

module.exports = {
    id: 'acces',
    async execute(client, interaction) {
        const member = interaction.member
        var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var passwordLength = 3;
        var password = "";
        for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }
        const ACCES = new EmbedBuilder()
        .setTitle('Bip Bip Bip ....')
            .setThumbnail('https://cdn.discordapp.com/attachments/1012427190354317312/1030615543968972830/download.jpg')
            .setColor('#b9ede9')
            .setDescription(`Félicitation, tu viens de passer la première étapes.\nTon code d'accès est: \n\n\`\`${password}\`\`\n\n Pense bien a les sauvegarder, il te seront utile pour la suite des évènements...`)
            .setImage('https://cdn.discordapp.com/attachments/1012427190354317312/1030615543968972830/download.jpg')

        interaction.deferUpdate()
        await member.send({ embeds: [ACCES], })

    }
};