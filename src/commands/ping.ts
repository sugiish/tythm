/* eslint-disable no-unused-vars */
import { User, CommandInteraction } from 'discord.js'
import { Discord, Slash, SimpleCommand, SimpleCommandMessage } from 'discordx'

@Discord()
export class PingCommand {
  ping (user: User): string {
    return `${user} Pong!`
  }

  @Slash('ping', { description: 'ping pong' })
  private pingSlash (interaction: CommandInteraction) {
    const reply = this.ping(interaction.user)
    interaction.reply(reply)
  }

  @SimpleCommand('ping')
  private pingSimpleCommand (command: SimpleCommandMessage) {
    const reply = this.ping(command.message.author)
    command.message.reply(reply)
  }
}
