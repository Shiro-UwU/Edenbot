const { Client, CommandInteraction, InteractionType } = require("discord.js")
const { ApplicationCommand } = InteractionType;

module.exports = {
    name: "interactionCreate",
    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */

    async execute(interaction, client) {
        
        if (!interaction.guild || interaction.user.bot) return;
        if (interaction.type === ApplicationCommand) {
            const command = client.commands.get(interaction.commandName)

            if (!command) return interaction.reply({ content: ":x: | Une erreur est survenue !", ephemeral: true }) && client.commands.delete(interaction.commandName)

            if (command.userPerms && command.userPerms.length !== 0) if (!interaction.member.permissions.has(command.userPerms)) return interaction.reply({ content: `:x: | Vous avez besoin des permission \`${command.userPerms.join(", ")}\` pour executer cette commande !`, ephemeral: true })
            if (command.botPerms && command.botPerms.length !== 0) if (!interaction.member.permissions.has(command.botPerms)) return interaction.reply({ content: `:x: | j'ai besoin des permissions \`${command.botPerms.join(", ")}\` pour executer cette command !`, ephemeral: true })        
            command.execute(client, interaction)
        } else if (interaction.isButton()) {
          const btn = client.buttons.get(interaction.customId);
          if (!btn) return interaction.reply('Ce bouton n\'existe pas!');
          btn.execute(client, interaction);
        } else if (interaction.isModalSubmit()) {
            if (interaction.customId === 'report') {
                interaction.member.roles.add('1036556364044046356')
                const Pseudo = interaction.fields.getTextInputValue('Pseudo');
                const Code = interaction.fields.getTextInputValue('Code');
                await interaction.guild.channels.cache.get("1037036753346887710").send({ content: `**Nouvelle entrée :**\n➡ **Pseudo Discord :** ${Pseudo} -- **Code :** ${Code} `});
                return interaction.reply({ content: "La <#1034984254100226141> a bien été effectuer vous pouvez désormer passer à l'étape suivante", ephemeral: true }) 
            }

            if (interaction.customId === 'verification') {
                interaction.member.roles.add('1036556032207503410')
                const Codes = interaction.fields.getTextInputValue('Codes');
                    await interaction.guild.channels.cache.get("1037036753346887710").send({ content: `**Confirmation de code :**\n✅ **Code :** ${Codes} `});
                return interaction.reply({ content: "Tu peux désormer rejoindre le <#1034984362678157322> pour enfin nous rejoindre ", ephemeral: true })
           }
        }
    }
}