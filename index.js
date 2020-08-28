console.log("*Vore is loading...*")
const {Client} = require("discord.js");
const bot = new Client()

bot.on('ready', () => {
    console.log("VORE ME DADDY")
})

bot.on('message', message => {
    if(message.author.bot) return;

    if(message.content.startsWith("!vore")) {
        let member = message.mentions.members.first();
        if(!member) return message.channel.send(`\*vores ${message.author.username}\*`)
        message.channel.send(`\*${message.author.username} vores ${member.user.username}\*`)
     //   message.channel.send(`*vores ${member.user.username}*`)
    }else if((message.content.toUpperCase().includes("VORE")) || (message.content.toUpperCase().includes("\\/ORE"))) {
        message.channel.send(`\*vores ${message.author.username}\*`)
    }


})

bot.login(require('./config.json').token)