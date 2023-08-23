const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const Embed = new Discord.RichEmbed()
    .setTimestamp()
    .setAuthor("Stats", client.user.avatarURL)
    .setColor("BLUE")
    .setTitle("Stats")
    .setURL(
      "https://discord.com/oauth2/authorize?client_id=752044928774963260&scope=bot&permissions=8"
    )
    .setDescription(`Sunucu İstatistiklerini Sunan Bir Botdur.`)

    .addField(
      ".kurulum / .statskapat",
      `Stats Odası Açıp Kapatmak İçin Bu 2 Komut Yeterlidir.`
    )

    .addField(".botbilgi", `Stats Hakkında Bilgi Alırsınız!`)

    .addField(".davet", `Stats Botunu Davet Edebilirsiniz!`)

    .setFooter("Shining Moon", client.user.avatarURL);
  message.channel.send(Embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım", "help", "h", "help"],
  permLevel: 0
};

module.exports.help = {
  name: "yardım",
  description: "Yardım Menüsü",
  usage: "Yardım"
};
