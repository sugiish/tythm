import { Client } from 'discord.js';

const client = new Client({ intents: 0 });

client.once('ready', () => {
  console.log('準備完了！');
});

client.login('トークンをここに貼り付ける');
