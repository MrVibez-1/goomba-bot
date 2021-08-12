const Discord = require("discord.js");

module.exports = {
    config: {
        name: "youtube",
        description: "links youtube channel",
        category: 'utility',
        usage: "youtube",
        example: "youtube",
        aliases: ['yt']
    },
    run: async (bot, message, args) => {
        let start = Date.now();
  
  message.channel.send({embed: {description: "🔍 Let Me Search...", color: "RANDOM"}}).then(m => {
    
    let end = Date.now();
    
    let embed = new Discord.MessageEmbed()
    .setAuthor("https://www.youtube.com/channel/UCYGF8c1U8scAWsAKT1y-qxw!", message.author.avatarURL({ dynamic: true }))
    .setColor("RANDOM");
    m.edit(embed).catch(e => message.channel.send(e));
    
  });
    }
};