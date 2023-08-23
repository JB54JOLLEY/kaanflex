const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const Embed = new Discord.RichEmbed()
    .setTimestamp()
    .setAuthor("Stats", client.user.avatarURL)
    .setColor("BLUE")
    .setTitle("Stats")
    .setURL(
      ""
    )
    .setDescription(`Sunucuna İstatistik Paneli Yapmak İçin Davet Edebilirsin`)

    .addField("Davet Linki.", ``)

    .setFooter("Stats", client.user.avatarURL);
  message.channel.send(Embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "davet",
  description: "Davet Et.",
  usage: "davet"
};
