const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const Embed = new Discord.RichEmbed()
    .setTimestamp()
    .setAuthor("✫ Stern Stats", client.user.avatarURL)
    .setColor("BLUE")
    .setTitle("✫ Stern Stats")
    .setURL(
      "https://discord.com/oauth2/authorize?client_id=752044928774963260&scope=bot&permissions=8"
    )
    .setDescription(`Sunucuna İstatistik Paneli Yapmak İçin Davet Edebilirsin`)

    .addField("Davet Linki.", `https://discord.com/oauth2/authorize?client_id=752044928774963260&scope=bot&permissions=8`)

    .setFooter("✫ Stern Stats", client.user.avatarURL);
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
