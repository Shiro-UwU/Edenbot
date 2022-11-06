const { Schema, model} =  require("mongoose")

const messSchema = new Schema({
    guildId: String,
    channelId: String, 
   
});

module.exports = model("Mess", messSchema, "MessSchema");