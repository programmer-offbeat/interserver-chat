console.log("       ➥ Loading packages");
const config = require(`${process.cwd()}/config.json`);
const {Intents, Client, WebhookClient, Collection} = require('discord.js');


const client2 = new Client({
    intents: 32767
})

client2.login(config.token || process.env.BOT_TOKEN);
client2.on('ready', async() => {
    client2.user.setActivity(`bot is starting...`);
});
delay(5000);


const client = new Client({
  fetchAllMembers: false,
  restTimeOffset: 0,
  failIfNotExists: false,
  shards: "auto",
  allowedMentions: {
  parse: [],
  repliedUser: false,
  },
  partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER', 'USER'],
  intents: 32767,
});

client.commands = new Collection();
client.prefix = "!!";
client.config = require(`${process.cwd()}/config.json`)

console.log("       ➥ Getting ready\n")
client.on('ready', async() => {
    client2.destroy();
});

require("./src/handlers/loader.js")(client);

client.login(client.config.bot_token || process.env.BOT_TOKEN)

//functions

async function delay(time)
{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(2);
        }, time);
    });
}
