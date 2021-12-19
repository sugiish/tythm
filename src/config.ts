export interface Config {
  discordBotToken: string
  prefix: string
}

export function loadConfig (): Config {
  try {
    const config = require('../config.json')
    return buildConfig(config)
  } catch (error) {
    return buildConfig(undefined)
  }
}

function buildConfig (config: any): Config {
  return {
    discordBotToken: process.env.DISCORD_BOT_TOKEN ?? config?.discordBotToken ?? '',
    prefix: process.env.PREFIX ?? config?.prefix ?? '!'
  }
}
