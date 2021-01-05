module.exports = {
    name: 'bots',
    description: "Custom Bots",
    execute(message, args, client, Discord){
        const wink=':wink: '
        const IntroEmbed = new Discord.MessageEmbed()
        .setColor('#8800FF')
        .setTitle('__***Custom Bots:***__')
        .setDescription(
            'We are proud to present **THREE** custom bots to make your trading experience seamless! No more checking Tradingview to see if your stock has hit a certain price,\n\
            as these bots do all this for you! **AND** there is no getting maxed out on price target alerts like Tradingview ' + wink +'\n\ \n\ To get a better visual understanding check out <#791408414247878657>. If you have any questions or feedback you can ask in <#791402629728436234>,<#791402514762694686>, or directly message our bot specialist <@415610407034683414>')
            
        const StockBotEmbed= new Discord.MessageEmbed()
        .setColor('#8800FF')
        .setTitle('__***Stock Alert Bot:***__')
        .setDescription(' The Stock Alert Bot is able to give you pivot points, relative volume spikes, price targets, daily highs/lows and even EMA alerts. There are 3 tiers available for purchase which can be viewed in <#791401701248335903>\n\
        ')

        const CrytpoBotEmbed= new Discord.MessageEmbed()
        .setColor('#8800FF')
        .setTitle('__***Crypto Alert Bot:***__')
        .setDescription(' The Crypto Alert Bot is able to give you pivot points, price targets, daily highs/lows and even EMA alerts. There are 2 tiers available for purchase which can be viewed in <#793639646848483378>\n\
        ')

        const StockScreenerEmbed= new Discord.MessageEmbed()
        .setColor('#8800FF')
        .setTitle('__***Stock Alert Bot:(COMING SOON)***__')
        .setDescription('The stock screener is able to scan for weekly and daily triangles throughout the entire NASDAQ and NYSE. As swing traders we can analyze shifting money between sectors and focus the bot’s attention to that sector. ')
 
        message.channel.send(IntroEmbed);
        message.channel.send(StockBotEmbed);
        message.channel.send(CrytpoBotEmbed);
        message.channel.send(StockScreenerEmbed);

    }
}