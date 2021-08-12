const Discord = require("discord.js");

module.exports = {
    config: {
        name: "discord",
        description: "links discord",
        category: 'social',
        usage: "-discord",
        example: "-discord",
        aliases: ['ds']
    },
    run: async (bot, message, args) => {
        let start = Date.now();
  
  message.channel.send({embed: {description: "🔍 Let Me Search...", color: "RANDOM"}}).then(m => {
    
    let end = Date.now();
    
    let embed = new Discord.MessageEmbed()
    .setTitle("Discord", message.author.avatarURL({ dynamic: true }))
    .setDescription("https://discord.gg/AaXaNsQHzW")
    .setFooter("Goomba Bot")
    .setThumbnail("https://media0.giphy.com/media/UwkrJKRKJkFb2/giphy.gif")
    .setColor("RANDOM");
    m.edit(embed).catch(e => message.channel.send(e));
    
  });
    }
};