const { MessageEmbed } = require("discord.js");
const colors = require("colors");
module.exports = async (client, message, client2) => {
    let usercount = 0;
    for(const a of client.guilds.cache.values())
        usercount+=a.memberCount;
    console.log(`╭┈⎯⎯ ୨ Discord bot logged in ୧ ⎯⎯⎯┈╮`.bgGreen);
    console.log(`┊   » Tag : ${client.user.tag}
┊   » Id : ${client.user.id}
┊   » Guilds : ${client.guilds.cache.size}
┊   » Usercount: ${usercount}
┊   » Command count : ${client.commands.size}`.yellow.dim);
    console.log(colors.green(`╰┈⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯┈╯\n`));
    console.log("Invite link with admin perms".bgYellow+" : "+colors.blue.underline("https://discord.com/api/oauth2/authorize?client_id="+client.user.id+"&permissions=8&scope=bot%20applications.commands"));
    //client.channels.cache.get("956007124243185684").send(`Bot logged in.`);
    client.user.setActivity(`Made by Astrexx.jar#4035`);
}
