const { TextInputBuilder, ModalBuilder, ActionRowBuilder, TextInputStyle } = require("discord.js")

module.exports = {
    id: 'verification',
    async execute(client, interaction,) {

        let Modal = new ModalBuilder()
          .setCustomId('verification')
          .setTitle('Confirmation du code')
    
        let question1 = new TextInputBuilder()
          .setCustomId('Codes')
          .setLabel(`Code de Vérification`)
          .setPlaceholder('Confirmation du code...')
          .setRequired(true)
          .setStyle(TextInputStyle.Short)
    
    
        let ActionRow1 = new ActionRowBuilder().addComponents(question1);
    
        Modal.addComponents(ActionRow1)
    
        await interaction.showModal(Modal)
    
      }
    }