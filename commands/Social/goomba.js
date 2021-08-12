const Discord = require("discord.js");

module.exports = {
    config: {
        name: "goomba-bot",
        description: "Invite Goomba Bot to your DISCORD!",
        category: 'social',
        usage: "-invite",
        example: "youtube",
        aliases: ['yt']
    },
    run: async (bot, message, args) => {
        let start = Date.now();
  
  message.channel.send({embed: {description: "🔍 Let Me Search...", color: "RANDOM"}}).then(m => {
    
    let end = Date.now();
    
    let embed = new Discord.MessageEmbed()
    .setTitle("Goomba Bot", message.author.avatarURL({ dynamic: true }))
    .setDescription("https://bit.ly/3ACcnrG")
    .setFooter("Goomba Bot")
    .setThumbnail("https://media0.giphy.com/media/UwkrJKRKJkFb2/giphy.gif")
    .setColor("RANDOM");
    m.edit(embed).catch(e => message.channel.send(e));
    
  });
    }
};