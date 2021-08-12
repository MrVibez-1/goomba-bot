const Discord = require("discord.js");

module.exports = {
    config: {
        name: "hour-boost",
        description: "steam group",
        category: 'social',
        usage: "-hour-boost",
        example: "-hour-boost",
        aliases: ['hour']
    },
    run: async (bot, message, args) => {
        let start = Date.now();
  
  message.channel.send({embed: {description: "🔍 Let Me Search...", color: "RANDOM"}}).then(m => {
    
    let end = Date.now();
    
    let embed = new Discord.MessageEmbed()
    .setTitle("Hour Boost", message.author.avatarURL({ dynamic: true }))
    .setDescription("https://bit.ly/3Av91Xs")
    .setFooter("Goomba Bot")
    .setThumbnail("https://media0.giphy.com/media/UwkrJKRKJkFb2/giphy.gif")
    .setColor("RANDOM");
    m.edit(embed).catch(e => message.channel.send(e));
    
  });
    }
};