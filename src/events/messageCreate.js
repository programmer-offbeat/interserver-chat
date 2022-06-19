/*this file was "inspired" from Tomato#6966's code !
* milrato.eu
*/

const { MessageEmbed } = require("discord.js");
module.exports = async (client, message) => {
    if (message.author.bot || !message.guild) return 
    let prefix = client.prefix;
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
    if (!prefixRegex.test(message.content)) return 
    const [, matchedPrefix] = message.content.match(prefixRegex);
    const [ cmdName, ...args ] = message.content.slice(matchedPrefix.length).trim().split(/ +/g);
    if (args.length === 0){
        if(matchedPrefix.includes(client.user.id))
          return message.reply({embeds: [new MessageEmbed()
            .setColor("FUCHSIA")
            .setTitle(`hi ! im under developement`)
          ]}).catch(() => null);
      }
    const cmd = client.commands.get(cmdName.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmdName.toLowerCase()));

    if (!cmd) return;
    try {
        cmd.execute(client, message, args, prefix);
    } catch (e){
        console.error(e);
        message.channel.send(`❌ Something went wrong, while running the ${cmd.name} Command`).catch(() => null);
    }
    
}
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}
