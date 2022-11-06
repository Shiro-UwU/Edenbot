const { EmbedBuilder,} = require('discord.js');
const Mess = require('../../Schema/Mess')

module.exports = {
    name: 'messageCreate',
      /**
     * 
     * @param {Client} client 
     * @param {message} message 
     */
       async execute(message, client) {
        if (message.author.bot) return; 
        const mess = await Mess.findOne({
            guildId: message.guild.id,
        })
        const pollContent = message.content    


        if (mess == null) return;

        const LOGS = new EmbedBuilder()
            .setColor('BLUE')
            .setTitle(`**Nouveau Message**`)
            .setDescription("```" + pollContent + "```")
            .addFields(
                { name: `👨 Utilisateur :`, value: `${message.author}` },
                { name: `🔊 Dans le salon :`, value: `<#${message.channel.id}>` },
            )
            .setThumbnail(message.author.displayAvatarURL())
            .setTimestamp()
            .setFooter({ text: 'Envoyé par : ' + message.author.tag, iconURL: `${message.author.displayAvatarURL()}` })

        client.channels.cache.get(mess.channelId).send({ embeds: [LOGS] });
    }
}
