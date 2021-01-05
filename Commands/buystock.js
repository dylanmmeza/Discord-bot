module.exports = {
    name: 'buystock',
    description: "trading style embedbuy stock bot",
    execute(message, args, client, Discord){
        // const sunglasses=':sunglasses:'
        const newE = new Discord.MessageEmbed()
        .setColor('#45D815')
        .setTitle('__***BUY STOCK ALERT BOT***__')
        .setDescription(
            'The Stock Alert Bot can be bought here. There are three tiers to choose from, each one building off the previous tier. Once purchased you can immediately start using, simply DM the bot. (NO PAYPAL ACCOUNT IS REQUIRED)\n\
            \n\**Login**: "LAST NAME + FIRST 3 DIGITS OF YOUR POSTAL CODE" (EX: Abukar728)'
        )
        .addFields(
            {name:'__Tier 1 -$0.90/month **(NEW YEARS SALE 10% OFF-ENDS 1/9)**__',value:'You may use the bot once every other day. \n\ You have 3 Alerts: Daily High, Daily Low and Price Crosses EMA.\n\ https://py.pl/2aBYNQGJA9B'},

            {name:'__Tier 2 -$4.50/month **(NEW YEARS SALE 10% OFF-ENDS 1/9)**__',value:'You may use the bot once every day. \n\ You have 5 Alerts: Daily High, Daily Low, Price Crosses EMA, Price Targets and Relative Volume Spike.\n\ https://py.pl/2Hkvxr'},

            {name:'__Tier 3 -$9.00/month **(NEW YEARS SALE 10% OFF-ENDS 1/9)**__',value:'You may use the bot once every other day. \n\ You have 6 Alerts: Daily High, Daily Low, Price Crosses EMA, Price Targets, Relative Volume Spike and Pivot Points.\n\ https://py.pl/2CB7TQp5K8k'}
            



        )
        message.channel.send(newE);
    }
}