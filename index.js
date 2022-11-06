const { Client, Partials, Collection, InteractionType, GuildMember } = require("discord.js")
const ms = require("ms")
const mongoose = require("mongoose")
const config = require("./config")

const { Channel, Message, Reaction, ThreadMember, User, GuildScheduledEvent } = Partials
const client = new Client({
    intents: 131071,
    partials: [Channel, GuildMember, Message, Reaction, ThreadMember, User, GuildScheduledEvent],
    allowedMentions: { parse: ["everyone", "roles", "users"]},
    rest: { timeout: ms("1m")}
})

client.economy = require("dc.eco")
client.economy.setMongoURL("mongodb+srv://thibaut:thibaut.htz.2008@edenbot.qpuk9ud.mongodb.net/test")

client.commands = new Collection()
client.events = new Collection()
client.buttons= new Collection()

const Handlers = ["Events", "Commands", "Buttons"]

Handlers.forEach(handler => {
    require(`./Handlers/${handler}`)(client)
})

module.exports = client

mongoose.connect("mongodb+srv://thibaut:thibaut.htz.2008@edenbot.qpuk9ud.mongodb.net/test", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("base de donnée connectée !")).catch((e) => console.error(e)) 
client.login(config.token)