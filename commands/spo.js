const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Spotify Reward:")
    .setColor("#15f153")
    .addField("5 invites", "1 comptes", true)
    .addField("15 invites ", "2 comptes", true)
    .addField("25 invites ", "3 comptes", true)
    .setFooter("Pour avoir votre reward, merci de vous rendres sur ce lien : http://dapalan.com/NDL0");

    message.channel.send(botembed);
}



module.exports.help = {
  name:"spo"
}
