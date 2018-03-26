const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function () {
    bot.user.setGame("Command: *help");
    console.log("Connectdç");
});

bot.login("NDI3NjUzMTUxNTE3MzEwOTc3.DZnqmw.zcl1ZtiVEzJ5g85RX3lM3rYmuVs");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendmessage("liste des commandes: \n -*help");
    }

    if (message.content === "salut"){
    message.reply("bien le bonjour.  :)");
    console.log("Commande Salut effectué");
 }
});
