const { MessageEmbed, WebhookClient } = require("discord.js");
const fetch = require('node-fetch');

module.exports = async (client, message) => {
    const allWebhooks = [];
    for(const w of client.config.webhooks)
    {
        const response = await fetch(w);
        const body = await response.text();
        let b = JSON.parse(body);
        allWebhooks.push([b.channel_id, b.id , b.token]);
    }

    if(message.author.bot) return;
    if(!allWebhooks.toString().includes(message.channel.id)) return;

    const theonewhosent = `${message.author.username}・${message.guild.name}`.substring(0, 32);
     let content = message.content ;
     if(message.attachments.size > 0 ) message.attachments.forEach(c => {
     content += `\n${c.proxyURL}`;
  }) 

  for(const w of allWebhooks)
  {
    if(w[0] != message.channel.id)
    {
      new WebhookClient({id: w[1], token: w[2]}).send({
        username : theonewhosent,
        avatarURL : message.author.displayAvatarURL({ dynamic : true }),
        allowedMentions: { parse: [] },
        content : content
      }).catch((err) => { console.warn(err.stack ? err.stack : err); });
    }
  }
}
