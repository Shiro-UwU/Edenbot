
const { Client, channelLink, EmbedBuilder, time } = require("discord.js")

const ms = require("ms")

const { channels, readyTimestamp } = require("../..")

module.exports = {

    name: "ready",

    /**

     * @param {Client} client

     */

    async execute(client) {

        const REDEM = new EmbedBuilder()

            .setTitle(`Redémarrage de ${client.user.username}`)

            .setDescription('\:thumbsup_tone1: | Le code a été changer et le bot est bien redémarré')

            .setColor('#0000ff')

            .setTimestamp()

        console.log(`Connectés à ${client.user.username}`)

        console.log(`Le bot est utilisé sur ${client.guilds.cache.size} serveurs !`)

        channels.cache.get(`1038648256529436772`).send({ embeds: [REDEM], })

                let statuses = [

            "Ready by Shirô UwU#5030 & rems#4918",


            `${client.guilds.cache.size} serveurs !`,

            "Bot encore en développement !",

        ];

        setInterval(function () {

            let status = statuses[Math.floor(Math.random() * statuses.length)];

            client.user.setActivity(status, {

                name: "Eden'bot",

                type: 0,

            });

        }, 10000);

    }

}