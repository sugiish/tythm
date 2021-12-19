import { Client } from 'discordx'
import { Interaction, Intents } from 'discord.js'
import { importx } from '@discordx/importer'
import { loadConfig } from './config'
import path from 'path'

const intents = [
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILD_VOICE_STATES
]
const config = loadConfig()
const client = new Client({
  intents: intents,
  simpleCommand: {
    prefix: config.prefix
  }
})

client.once('ready', async () => {
  await client.initApplicationCommands()
  await client.initApplicationPermissions()
  console.log('Tythm is ready!')
})
client.on('interactionCreate', (interaction: Interaction) => {
  client.executeInteraction(interaction)
})
client.on('messageCreate', (message) => {
  client.executeCommand(message)
})

async function start (client: Client) {
  await importx(path.join(__dirname, 'commands/**/*.{js,ts}'))
  await client.login(config.discordBotToken)
}

start(client)
