const { EmbedBuilder } = require('discord.js')

module.exports = {
    id: 'validation',
    async execute(client, interaction) {
        if (interaction.member.roles.cache.has('1036433074721923152')) {
            interaction.member.roles.remove('1036433074721923152')
            const EmbedRoleDelete = new EmbedBuilder()
                .setColor('#3dffcc')
                .setDescription(`/!\\  L'accès viens d'être fermer, rappuyez sur \`\`🏝️Étape suivante\`\` pour revenir à l'étape précedente !  /!\\`)

            await interaction.reply({ embeds: [EmbedRoleDelete], ephemeral: [true] })
        } else {
            interaction.member.roles.add('1036433074721923152')
            const EmbedRoleAdd = new EmbedBuilder()
                .setColor('#3dffcc')
                .setDescription(`✅ L'accès au <#1034983776838754396> vient d'être ouvert, nous vous laissons le suivre pour continuer... `)

            await interaction.reply({ embeds: [EmbedRoleAdd], ephemeral: [true] })
        }
    }
};