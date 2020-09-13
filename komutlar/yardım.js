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
    .setDescription(`Sunucu İstatistiklerini Sunan Bir Botdur.`)

    .addField(
      "st!kurulum / st!statskapat",
      `Stats Odası Açıp Kapatmak İçin Bu 2 Komut Yeterlidir.`
    )

    .addField("st!botbilgi", `✫ Stern Stats Hakkında Bilgi Alırsınız!`)

    .addField("st!davet", `✫ Stern Stats Botunu Davet Edebilirsiniz!`)

    .setFooter("© R3LEASE", client.user.avatarURL);
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
