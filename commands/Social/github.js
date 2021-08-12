const Discord = require("discord.js");

module.exports = {
    config: {
        name: "github",
        description: "links github profile",
        category: 'social',
        usage: "-git",
        example: "-github",
        aliases: ['git']
    },
    run: async (bot, message, args) => {
        let start = Date.now();
  
  message.channel.send({embed: {description: "🔍 Let Me Search...", color: "RANDOM"}}).then(m => {
    
    let end = Date.now();
    
    let embed = new Discord.MessageEmbed()
    .setTitle("GitHub", message.author.avatarURL({ dynamic: true }))
    .setDescription("https://bit.ly/2UaI8Zn")
    .setFooter("Goomba Bot")
    .setThumbnail("https://media0.giphy.com/media/UwkrJKRKJkFb2/giphy.gif")
    .setColor("RANDOM");
    m.edit(embed).catch(e => message.channel.send(e));
    
  });
    }
};