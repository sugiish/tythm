import { HelpCommand } from 'src/commands/help'

describe('!help', () => {
  it('shows command list', () => {
    const result = new HelpCommand().help().embeds[0]
    expect(result.fields[0]).toMatchObject({ name: 'help', value: 'show help', inline: true })
  })
})
