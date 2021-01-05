module.exports = {
    name: 'brokers',
    description: "Links to brokers",
    execute(message, args, client, Discord){

        const QuestEmbed = new Discord.MessageEmbed()
        .setColor('#5600FF')
        .setTitle('__***TIK-TOK***__')
        .setDescription('Go show the videos some love\n'+TIK_TOK_emoji + ' https://vm.tiktok.com/ZSbgsFUR/')
 
        const YTEmbed= new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('__***YOUTUBE***__')
        .setDescription("Recordings of live analysis calls\n" + youtube_emoji + ' https://www.youtube.com/channel/UCJm3HgzwPA4Id2aIVx24CLg')

        const PayPalEmbed= new Discord.MessageEmbed()
        .setColor('#00CBFF')
        .setTitle('__***PayPal***__')
        .setDescription("In case you'd like to buy me a coffee:)\n" +paypal_emoji + ' https://www.paypal.com/paypalme/vinstock')

        const DEmbed= new Discord.MessageEmbed()
        .setColor('#030303')
        .setTitle('__***Discord Referal Link***__')
        .setDescription("If you would like to share the server with friends use this link\n" +Discord_emoji + ' https://discord.gg/EyRQvtdC')


        message.channel.send(QuestEmbed);
        message.channel.send(TTEmbed);
        message.channel.send(YTEmbed);
        message.channel.send(PayPalEmbed);

    }
}