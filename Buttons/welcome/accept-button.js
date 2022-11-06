const { EmbedBuilder } = require('discord.js')

module.exports = {
    id: 'accept-button',
    async execute(client, interaction) {
        if (interaction.member.roles.cache.has('1034506560757567568')) {
            interaction.member.roles.remove('1034506560757567568')
            const EmbedRoleDelete = new EmbedBuilder()
                .setColor('#3dffcc')
                .setDescription(`✅ Le rôle ${interaction.guild.roles.cache.get('1034506560757567568')} vous a été retiré avec succès !`)

            await interaction.reply({ embeds: [EmbedRoleDelete], ephemeral: [true] })
        } else {
            interaction.member.roles.add('1034506560757567568')
            const EmbedRoleAdd = new EmbedBuilder()
                .setColor('#3dffcc')
                .setDescription(`✅ Le rôle ${interaction.guild.roles.cache.get('1034506560757567568')} vous a été ajouté avec succès !`)

            await interaction.reply({ embeds: [EmbedRoleAdd], ephemeral: [true] })
        }
    }
};