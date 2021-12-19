/* eslint-disable no-unused-vars */
import { User, CommandInteraction } from 'discord.js'
import { Discord, Slash, SimpleCommand, SimpleCommandMessage, SimpleCommandOption, SlashOption } from 'discordx'

@Discord()
abstract class EchoCommand {
  private echo (user: User, body: string): string {
    return `${user} ${body}`
  }

  @Slash('echo')
  private echoSlash (@SlashOption('body', { required: true, type: 'STRING' }) body: string, interaction: CommandInteraction) {
    const reply = this.echo(interaction.user, body)
    interaction.reply(reply)
  }

  @SimpleCommand('echo')
  private echoSimpleCommand (@SimpleCommandOption('body', { type: 'STRING' }) body: string = '', command: SimpleCommandMessage) {
    const reply = this.echo(command.message.author, body)
    command.message.reply(reply)
  }
}
