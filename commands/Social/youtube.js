const Discord = require("discord.js");

module.exports = {
    config: {
        name: "youtube",
        description: "links youtube channel",
        category: 'social',
        usage: "-youtube",
        example: "youtube",
        aliases: ['yt']
    },
    run: async (bot, message, args) => {
        let start = Date.now();
  
  message.channel.send({embed: {description: "🔍 Let Me Search...", color: "RANDOM"}}).then(m => {
    
    let end = Date.now();
    
    let embed = new Discord.MessageEmbed()
    .setTitle("YouTube", message.author.avatarURL({ dynamic: true }))
    .setDescription("https://bit.ly/3iF6T9z")
    .setFooter("Goomba Bot")
    .setThumbnail("https://media0.giphy.com/media/UwkrJKRKJkFb2/giphy.gif")
    .setColor("RANDOM");
    m.edit(embed).catch(e => message.channel.send(e));
    
  });
    }
};