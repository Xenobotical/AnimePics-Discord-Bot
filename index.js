const Discord = require("discord.js");
const bot = new Discord.Client();
const pluginid = '[TOKEN]'

bot.login(pluginid)

bot.on('message', function(message) {
    if(message.content == '?neko')
    {
        number = 101;
        imageNumber = Math.floor (Math.random() * (number + 0)) + 1;
        message.channel.sendMessage( {files: ["./Nekos/" + imageNumber + ".jpg"]} )
    }
});

bot.on('message', function(message) {
    if(message.content == '?catgirl')
    {
        number = 101;
        imageNumber = Math.floor (Math.random() * (number + 0)) + 1;
        message.channel.sendMessage( {files: ["./Nekos/" + imageNumber + ".jpg"]} );
    }
});

bot.on('message', function(message) {
    if(message.content == '?hentaineko')
    {
        number = 101;
        imageNumber = Math.floor (Math.random() * (number + 0)) + 1;
        message.channel.sendMessage( {files: ["./Lewds/catgirls" + imageNumber + ".jpg"]} );
    }
});


bot.on('message', function(message) {
    if(message.content == '?help')
    {
        message.reply("Commands: ?neko - shows a random pic of a neko. Fun fact: This was the first command ever added to the original bot! This was made during the discord hacking drama somewhere in 2019. | ?catgirl - same as neko | ?hentaineko - NSFW version of ?neko | ?feedback - shows e-mail adress for support and feedback.");
    }

});

bot.on('message', function(message) {
    if(message.content == '?feedback')
    {
        message.channel.sendMessage("Feedback email: xUrusReal@gmail.com | IF WANTING TO SUBMIT USE ?submit COMMAND");
    }
});

bot.on('message', function(message) {
    if(message.content == '?submit')
    {
        message.channel.sendMessage("Submit your anime pics in my DMs xUrusReal#5047. Template message: https://pastebin.com/D96sB5z9");
    }
});

bot.on('message', function(message) {
    if(message.content == '?pictureamount')
    {
        message.channel.sendMessage("Currently, there are: 101 nekos, 0 lewd nekos, ...");
    }
});
