/* eslint-disable no-unused-vars */
import { User, CommandInteraction, MessageEmbed } from 'discord.js'
import { Discord, Slash, SimpleCommand, SimpleCommandMessage, MetadataStorage, Client } from 'discordx'

@Discord()
export class HelpCommand {
  help () {
    const descriptions = MetadataStorage.instance.applicationCommands.map((command) => {
      return { name: `${command.name}`, value: command.description, inline: true }
    })
    const embed = new MessageEmbed().setColor('AQUA').setTitle('Tythm Help').addFields(descriptions)
    return { embeds: [embed] }
  }

  @Slash('help', { description: 'show help' })
  private helpSlash (interaction: CommandInteraction) {
    interaction.reply(this.help())
  }

  @SimpleCommand('help')
  private helpSimpleCommand (command: SimpleCommandMessage) {
    command.message.reply(this.help())
  }
}
