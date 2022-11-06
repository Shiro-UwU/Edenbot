
const { EmbedBuilder, ButtonBuilder,  ActionRowBuilder, ButtonStyle} = require('discord.js');
const roles = new ActionRowBuilder ()

module.exports = {
    name: 'règlement',
    category: 'information', 
    description: 'Le règlement du serveur',

     /**
     * 
     * @param {Client} client 
     * @param {ChatInputCommandInteraction} interaction 
     */
  
    async execute(client, interaction) {

        const REGLEMENT = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle(`*__Règlement du serveur Bienvenidos a Edén__ *`)
            .setThumbnail('https://cdn.discordapp.com/icons/1021157150522875924/cd428148b6dcfd3f24c33e583cb2e19d.png?size=256')
            .setDescription(`
            \n\n Bienvenue parmi nous, Afin de visualiser les divers salons, merci de lire et validé le règlement. \n
            **REGLE N° 1 :**\n
            Le respect et la rigueur sont obligatoires\n
            **REGLE N° 2 :**\n
            Les propos racistes, homophobes ou discriminations qui auraient pour but d'insulter ou blesser quelqu'un, entraineront un ban définitif de ce serveur.\n
            **REGLE N° 3 :**\n
            Les publicités et spams sont interdits, pour tout partenariat il vous faudra ouvrir un ticket pour ainsi en parler avec l'administration.\n
            **REGLE N° 4 :**\n
            Toute forme de harcèlement entrainera un ban définitif.\n
            **REGLE N° 5 :**\n
            Toutes identifications inutiles sont interdites, nous prendrons des sanctions en fonction du caractère répétitif de cette infraction.\n
            **REGLE N° 6 :**\n
            Tout contenu à caractère violent (sang , cadavre ...) ou sexuel est interdit , il peut y'avoir des mineurs dans ce serveur.\n
            **REGLE N° 7 :**\n
            Si une personne est en désaccord avec vous ne la forcez pas.

            `)
            .setImage('https://cdn.discordapp.com/attachments/1012427190354317312/1030615543968972830/download.jpg')
            .setTimestamp();

            var row = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                .setStyle(ButtonStyle.Success)
                .setCustomId('accept-button')
                .setEmoji("✅")
                .setLabel('Je valide')
            )
            interaction.reply({
                embeds: [REGLEMENT],
                components: [row]
            })
            
    },
};