const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command =require(`./Commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Vinstock Trading is online');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    // if(command === 'ping'){
    //     client.commands.get('ping').execute(message, args);
    // }
    // else if (command == 'help'){
    //     client.commands.get('help').execute(message, args);
    // }
    if (command == 'rules'){
        client.commands.get('rules').execute(message,args,client,Discord)
    }
    else if (command == 'links'){
        client.commands.get('links').execute(message,args,client,Discord)
    }
    else if (command == 'trading'){
        client.commands.get('trading').execute(message,args,client,Discord)
    }
    else if (command == 'bots'){
        client.commands.get('bots').execute(message,args,client,Discord)
    }
    else if (command == 'buystock'){
        client.commands.get('buystock').execute(message,args,client,Discord)
    }
    else if (command == 'buycrypto'){
        client.commands.get('buycrypto').execute(message,args,client,Discord)
    }
    else if (command == 'verify'){
        client.commands.get('verify').execute(message,args,client,Discord)
    }
    else if (command == 'a'){
        client.commands.get('a').execute(message,args,client,Discord)
    }

});




client.login('Nzk0MjU3MDUwMTAwMDM5NzAy.X-4LhQ.hFVv2jCjV1cBHeu6AGrVRT7soic');

