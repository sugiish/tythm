import { User } from 'discord.js'
import { EchoCommand } from 'src/commands/echo'

describe('!echo', () => {
  it('responds with request body', () => {
    const user = ('<@1>' as unknown) as User
    const body = 'hoge'
    expect(new EchoCommand().echo(user, body)).toBe('<@1> hoge')
  })
})
