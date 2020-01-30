const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.RichEmbed()
 .setTimestamp()
 .setAuthor("ST-AT", client.user.avatarURL)
.setColor("BLUE")
.setTitle("ST-AT BOT")
 .setURL("https://discordapp.com/oauth2/authorize?client_id=647386467844227074&scope=bot&permissions=8")
 .setDescription(`Sunucu İstatistiklerini Sunan Bir Botdur.`)

 .addField("st!kurulum / st!statskapat", `Stats Odası Açıp Kapatmak İçin Bu 2 Komut Yeterlidir.`)
  .setTimestamp()
 .addField("st!botbilgi", `ST-AT Bot Hakkında Bilgi Alırsınız!`)
  .setTimestamp()
 .addField("st!davet", `ST-AT Botunu Davet Edebilirsiniz!`)
  .setTimestamp()
 .addField("st!webpanel", `ST-AT Odalarının İsimlerini Değiştirebilirsiniz!`)

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım","help","h","help"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
