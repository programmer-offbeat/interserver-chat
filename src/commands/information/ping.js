const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "ping",
    aliases: ["p"],
    description: "Show ping of the bot",
  
  execute: async (client, message, args, prefix) => {
let ping = client.ws.ping;
 let ws = await msg.createdAt.getTime() - message.createdAt.getTime()
 
 let pingee = new MessageEmbed()
 .setTitle('Pong!')
.addField(`WS :`, `${ws}`)
 .addField(`API :`, `${ping}`)
 return message.reply({ embeds: [pingee] })
}
}
