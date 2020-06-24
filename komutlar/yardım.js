const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const Embed = new Discord.RichEmbed()
    .setTimestamp()
    .setAuthor("ST-AT", client.user.avatarURL)
    .setColor("BLUE")
    .setTitle("R3LASE ST-AT BOT")
    .setURL(
      "https://discordapp.com/oauth2/authorize?client_id=653957385123266560&scope=bot&permissions=8"
    )
    .setDescription(`Sunucu İstatistiklerini Sunan Bir Botdur.`)

    .addField(
      "/kurulum / st!statskapat",
      `Stats Odası Açıp Kapatmak İçin Bu 2 Komut Yeterlidir.`
    )

    .addField("/botbilgi", `ST-AT Bot Hakkında Bilgi Alırsınız!`)

    .addField("/davet", `ST-AT Botunu Davet Edebilirsiniz!`)

    .addField("/webpanel", `ST-AT Odalarının İsimlerini Değiştirebilirsiniz!`)

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
