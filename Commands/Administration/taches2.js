
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'taches2',
    category: "administration",
    description: 'Listes des taches a faire sur le serveur',

     /**
     * 
     * @param {Client} client 
     * @param {ChatInputCommandInteraction} interaction 
     */
  
    async execute(client, interaction) {

        const tacheEmbed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle(`__**Liste des choses a faire : **__`)
            .setThumbnail('https://cdn.discordapp.com/icons/1021157150522875924/cd428148b6dcfd3f24c33e583cb2e19d.png?size=256')
            .setDescription(`
            \n\n
            \🟩 = Fini\n
            \🟧 = En cour \n
            \🟥 = Pas fini \n
            \---------------------\n
            \🟩 - Mise en place du captcha dans règlement \n
            \🟩 - Mise en place du salon arrivé dans bienvenue \n
            \🟥 - Mise en place des tickets support \n
            \🟥 - Retravailler les suggestions \n
            \🟥 - Mise en place de tous les auto rôles --> Voir rems pour aide \n
            \🟧 - Création de commande de disponibilité \n
            \🟥 - Création de commande RaidProtect \n
            \🟥 - Configuré le bot RaidProtect \n
            \🟧 - Commandes partenariat \n
            \🟩 - Création des maisons \n
            \🟧 - Faire le site \n
            \🟧 - Faire les information de la semaine \n
            \🟩 - Refaire le message de bienvenue \n
            \🟧 - Crée le message pour les dm \n
            \🟥 - Faire inviter le bot sur un max de serveur (10 environ) \n
            \🟧 - Faire la photo de profil du bot discord\n
            `)
            .setTimestamp();

        await interaction.reply({ embeds: [tacheEmbed] })
    },
};