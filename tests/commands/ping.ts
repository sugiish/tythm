import { User } from 'discord.js'
import { PingCommand } from 'src/commands/ping'

describe('!ping', () => {
  it('responds with pong', () => {
    const user = ('<@1>' as unknown) as User
    expect(new PingCommand().ping(user)).toBe('<@1> Pong!')
  })
})
