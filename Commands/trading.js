module.exports = {
    name: 'trading',
    description: "trading style embed",
    execute(message, args, client, Discord){
        const sunglasses=':sunglasses:'
        const newE = new Discord.MessageEmbed()
        .setColor('#FFEF00')
        .setTitle('__***My Trading Style ***__')
        .setDescription(
            'Alright team, here is a little explanation into my trading style for the new people entering the group. I mainly like to take 3 types of positions:\n\
            \n\
            **Day Trades (1 Day)**\n\
            **1-4 Day Swing Trades**\n\
            **1-6 Week Swing Trades**\n\
            \n\
            \n\ **New Members:**\n\
            \n\ **1.** Locate the <#778776161488338975> channel to set up the custom alerts you would like to recieve. We have alerts for stock, option, and cryptocurrency  trades as well as a live call every morning and once on the weekend. \n\
            \n\ **2.** The more you get involved in the server, the faster you will rank up! I am currently working on a complete beginners guide into trading, market psychology, how I analyze stocks and SO MUCH MORE!! I will be giving away this course **FOR FREE** to members who rank level 10 or higher **OR** the most active member every week, all you have to do is engage!! You can check your rank anytime in <#778713165692665856> by simply typing "!rank"\n\
            \n\ **3.** One way to get involved, is to join our live analysis calls at 9 AM EST to discuss current trades\n\
            \n\ **4.** You can find Short-Term, Swing-Trade, Long-Term and Cryptocurrency Watchlists under <#760995040595017758> \n\
            \n\ **5.** If you need any help analyzing  stocks, post it in <#743538938811252887> \n\
            \n\ **6.** If you need **HAVE** analyzed a stock and want feedback, post your chart in <#758697672151400478>\n\
            \n\ **7.** We also have 3 bots available for purchase: a **Stock** and **Crypto** Alert Bot to notify when price breaks a certain level, and a **Stock Screener** Bot that scans for triangle patterns across NASDAQ and NYSE(coming soon)! Check out <#794696447232573471> for more information.\n\
            \n\
            \n\ The main goal here is that you learn as much as possible and that we all grow our portfolios together!\n\
            \n\ **WELCOME TO THE TEAM**' + sunglasses
        )
        message.channel.send(newE);
    }
}