module.exports = {
    name: "unlock",
    category: "moderation",
    permissions: ['MANAGE_CHANNELS'],
    description: "Dévérouiller un salon",
      /**
    * @param {Client} client
    * @param {ChatInputCommandInteraction} interaction
    */
  
    async execute(client, interaction) {
      await interaction.channel.permissionOverwrites.edit(interaction.guild.id, { SendMessages: true });
      await interaction.reply({ content: "Le salon est dévérouillé!", ephemeral: true });
    }
  };
  