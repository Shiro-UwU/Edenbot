const { TextInputBuilder, ModalBuilder, ActionRowBuilder, TextInputStyle } = require("discord.js")

module.exports = {
    id: 'bus',
    async execute(client, interaction,) {

        let Modal = new ModalBuilder()
          .setCustomId('report')
          .setTitle('Code de Vérification')
    
        let question1 = new TextInputBuilder()
          .setCustomId('Pseudo')
          .setLabel(`Pseudo :`)
          .setPlaceholder('Nom sur le Serveur...(Pseudo#Tag)')
          .setRequired(true)
          .setStyle(TextInputStyle.Short)
          let question2 = new TextInputBuilder()
          .setCustomId('Code')
          .setLabel(`Code de Vérification`)
          .setPlaceholder('Codes reçut par message ...')
          .setRequired(true)
          .setStyle(TextInputStyle.Short)
    
    
        let ActionRow1 = new ActionRowBuilder().addComponents(question1);
        let ActionRow2 = new ActionRowBuilder().addComponents(question2);
    
        Modal.addComponents(ActionRow1, ActionRow2)
    
        await interaction.showModal(Modal)
    
      }
    }