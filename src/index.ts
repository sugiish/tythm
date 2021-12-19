import { Client } from 'discord.js'
import { loadConfig } from './config'

const intents = 32767 // intents for development
const client = new Client({ intents: intents })
const config = loadConfig()

client.once('ready', () => {
  console.log('Tythm is ready!')
})
client.on('messageCreate', message => {
  if (message.content === '!ping') {
    // メッセージが送信されたチャンネルへ「Pong.」を送り返す。
    message.channel.send('Pong.')
  }
})

client.login(config.discordBotToken)
