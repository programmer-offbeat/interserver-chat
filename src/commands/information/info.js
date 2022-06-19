const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "info",
    aliases: ["i"],
    description: "Show bot information",
    execute: async (client, message, args, prefix) => {
        return message.reply({embeds: [new MessageEmbed()
            .setColor("FUCHSIA")
            .setTitle(`- Under developement`)
            .setDescription(`This bot is under devlopemnt by Astrexx.jar#4035 !`)
        ]}).catch(() => null);
    },
};