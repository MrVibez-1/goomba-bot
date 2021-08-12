const Discord = require("discord.js");

module.exports = {
    config: {
        name: "instagram",
        description: "links instagram",
        category: 'social',
        usage: "-instagram",
        example: "-insagram",
        aliases: ['insta']
    },
    run: async (bot, message, args) => {
        let start = Date.now();
  
  message.channel.send({embed: {description: "🔍 Let Me Search...", color: "RANDOM"}}).then(m => {
    
    let end = Date.now();
    
    let embed = new Discord.MessageEmbed()
    .setTitle("Instagram", message.author.avatarURL({ dynamic: true }))
    .setDescription("https://bit.ly/3iGsXRk")
    .setFooter("Goomba Bot")
    .setThumbnail("https://media0.giphy.com/media/UwkrJKRKJkFb2/giphy.gif")
    .setColor("RANDOM");
    m.edit(embed).catch(e => message.channel.send(e));
    
  });
    }
};