const Discord = require('discord.js');
const config = require('./config.json')
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
    ]
});

client.on("ready", () => {
    console.log("Bot is online!")
})


client.on('message', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'me') {
        message.channel.send(
            `Your ID = ${message.author.id}   \nYour Account Created In --> ${message.author.createdAt.getFullYear()} \nYour username = ${message.author.username} \n gift sended in ur DM!`

        )
    }
    if (command === 'server') {
        message.channel.send(
            `Server create at ${message.guild.createdAt.getDate()}.${message.guild.createdAt.getMonth()}.${message.guild.createdAt.getFullYear()} in  ${message.guild.createdAt.getHours()}:${message.guild.createdAt.getMinutes()}:${message.guild.createdAt.getSeconds()}`
        )
    }

})
client.on('channelCreate', channel => {
    client.channels.cache.get('968206003847954432').send(`Channel created , name -> ${channel.name} , creator ${member.username}`)
})

client.on('messageDelete', message => {
    console.log(`A message by ${message.author.tag} was deleted, but we don't know by who yet.`);
});

client.login(config.token)