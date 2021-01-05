module.exports = {
    name: 'buycrypto',
    description: "crypto bot",
    execute(message, args, client, Discord){
        // const sunglasses=':sunglasses:'
        const newE = new Discord.MessageEmbed()
        .setColor('#45D815')
        .setTitle('__***BUY CRYPTO ALERT BOT***__')
        .setDescription(
            'The Crypto Alert Bot can be bought here. There are two tiers to choose from, each one building off the previous tier. Once purchased you can immediately start using, simply DM the bot. (NO PAYPAL ACCOUNT IS REQUIRED)\n\
            \n\**Login**: "LAST NAME + FIRST 3 DIGITS OF YOUR POSTAL CODE" (EX: Abukar728)'
        )
        .addFields(
            {name:'__Tier 1 -$6.50/month **(NEW YEARS SALE 10% OFF-ENDS 1/9)**__',value:'Screens all Cryptos 12 hours per day. \n\ You have 4 Alerts: Daily High, Daily Low, Price Crosses EMA and Price Targets.\n\ https://py.pl/2aBYNQGJA9B'},

            {name:'__Tier 2 -$14.00/month **(NEW YEARS SALE 10% OFF-ENDS 1/9)**__',value:'Screens all Cryptos 24 hours a day. \n\ You have 5 Alerts: Daily High, Daily Low, Price Crosses EMA, Price Targets and Pivot Points.\n\ https://py.pl/2Hkvxr'},

        

        )
        message.channel.send(newE);
    }
}