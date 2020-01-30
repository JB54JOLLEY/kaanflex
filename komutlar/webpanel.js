const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.RichEmbed()
 .setTimestamp()
 .setAuthor("ST-AT", client.user.avatarURL)
.setColor("BLUE")
.setTitle("ST-AT BOT")
 .setURL("https://discordapp.com/oauth2/authorize?client_id=647386467844227074&scope=bot&permissions=8")

 .addField("Webpanel", `https://www.mcadventuretime.com/discord/`)

 .setFooter("© Mcadventuretime.com", client.user.avatarURL)
 message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'webpanel',
  description: 'Webpaneli Gösterir.',
  usage: 'webpanel'
};
