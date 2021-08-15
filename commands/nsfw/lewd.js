const { MessageEmbed } = require('discord.js');
const config = require('../../config.js');
 
module.exports = {
  config: {
    name: "lewd",
    aliases: [""],
    category: "nsfw",
    description: "Sends an NSFW image ;)",
    usage: `${config.PREFIX}cat`,
},
    run: async (bot, message, args) => {
 
 
        require('node-fetch')(`https://gallery.fluxpoint.dev/api/nsfw/lewd`, { headers: { 'Authorization': "FPimZiRdL5jDYOQGrqvzF1fuxdd",  } }).then(res => res.json()).then(data => {
 
    const embed = new MessageEmbed()
    .setTitle(`OwO`)
    .setImage(data.file)
    .setFooter(`Requested ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true, format: 'png' }))
    .setTimestamp()
    .setColor(message.guild.me.displayHexColor);
    return message.channel.send(embed);
 
})
  }
}
 
