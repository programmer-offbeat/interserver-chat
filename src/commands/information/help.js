const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "help",
    aliases: ["h"],
    description: "Show all of the Commands",
    execute: async (client, message, args, prefix) => {
        return message.reply({embeds: [new MessageEmbed()
            .setColor("FUCHSIA")
            .setTitle(`here you go :`)
            .addFields(client.commands.map(d => {
                return {
                    name: `\`${prefix}${d.name}\``,
                    value: `> *${d.description}*`,
                    inline: true
                }
            }))
            .setFooter({text:":)"})
        ]}).catch(() => null);
    },
};