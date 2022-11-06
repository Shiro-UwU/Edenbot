
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'taches',
    category: "administration",
    description: 'Listes des taches a faire sur le serveur',

    /**
    * 
    * @param {Client} client 
    * @param {ChatInputCommandInteraction} interaction 
    */

    async execute(client, interaction) {

        const tacheEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(`__**Liste des choses a faire : **__`)
            .setAuthor({ name: `ㄒ卄丨乃卂ㄩㄒ#5030`, iconURL : 'https://cdn.discordapp.com/attachments/1011358892808212653/1030855300938465340/thibaut.png' })
            .setDescription(`
            \n\n
            \🟩 = Fini\n
            \🟧 = En cour \n
            \🟥 = Pas fini \n
            \---------------------\n
            1  - 🟩 - Mise en place du captcha dans règlement \n
            2  - 🟩 - Mise en place du salon arrivé dans bienvenue \n
            3  - 🟩 - Mise en place des tickets support \n
            4  - 🟩 - Retravailler les suggestions \n
            5  - 🟥 - Mise en place de tous les auto rôles \n
            7  - 🟥 - Création de commande RaidProtect \n
            8  - 🟥 - Configuré le bot RaidProtect \n
            9  - 🟥 - Commandes partenariat \n
            10 - 🟩 - Création des maisons \n
            11 - 🟩 - Faire le site ( thibaut#5030 / galaxy moom#5494)\n
            12 - 🟩 - Faire les information de la semaine ( @Xenom#8010 ) \n
            13 - 🟩 - Refaire le message de bienvenue \n
            14 - 🟥 - Crée le message pour les dm \n
            15 - 🟥 - Faire inviter le bot sur un max de serveur (6/15 serveur) \n
            16 - 🟩 - Faire la photo de profil du bot discord (@galaxy moom#5494)\n
            `)
            .setThumbnail('https://cdn.discordapp.com/icons/1021157150522875924/cd428148b6dcfd3f24c33e583cb2e19d.png?size=256')
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'Qui fait quoi ?', value: '11 - <@858321536917831700> est \n<@923672192103907398>', inline: true },
                { name: 'Qui fait quoi ?', value: 'Personne fait rien ...', inline: true },
                { name: 'Qui fait quoi ?', value: '16 - <@858321536917831700>', inline: true },
            )
            .setImage('https://cdn.discordapp.com/icons/1021157150522875924/cd428148b6dcfd3f24c33e583cb2e19d.png?size=256')
            .setTimestamp()
            .setFooter({ text:`ㄒ卄丨乃卂ㄩㄒ#5030 | Prochain resignalisation a 20h`, iconURL : 'https://cdn.discordapp.com/attachments/1011358892808212653/1030855300938465340/thibaut.png' })

            await interaction.reply({ embeds: [tacheEmbed] })
    },
};