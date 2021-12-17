import { Client } from 'discord.js'

const client = new Client({ intents: 0 })

client.once('ready', () => {
  console.log('準備完了！')
})
client.on('message', message => {
  console.log(message.content)
})

client.login(process.env.DISCORD_BOT_TOKEN)
