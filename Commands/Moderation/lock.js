
module.exports = {
    name: "lock",
    category: "moderation",
    permissions: ['MANAGE_CHANNELS'],
    description: "Vérouiller un salon",
     /**
    * @param {Client} client
    * @param {ChatInputCommandInteraction} interaction
    */
   
    async execute(client, interaction) {
      await interaction.channel.permissionOverwrites.edit(interaction.guild.id, { SendMessages: false });
      await interaction.reply({ content: "Le salon est vérouillé!", ephemeral: true });
    }
  };