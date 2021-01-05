module.exports = {
    name: 'a',
    description: "This is an embeded message",
    execute(message, args, client, Discord){
        const siren_emoji= ':rotating_light:'
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00FFFF')
        .setTitle(siren_emoji+' __***ANNOUNCEMENT***__ '+siren_emoji)
        .setDescription(
            'Happy New Year Team!! I hope everyone had a nice holiday break and is ready to make 2021 a legendary year! As many of you know I am currently working on a complete beginners guide into trading, market psychology, how I analyze stocks and **SO MUCH MORE!!!** The course is still in the works but starting now, you can secure a spot to receive this course **FOR FREE** by simply engaging in the server.\n\
            \n\ __**How to get Free Course:**__ \n\ **1.** Anyone ranked level 10 or higher by the time I release the course will gain instant access without having to pay (You can check rank in <#778713165692665856>).\n\ **2.** Every week we will be finding out who the most active member in the server was and that person will secure a spot too! All you have to do to get engaged is post messages in chat and join our live calls and it will all be tallied! (Please don\'t just spam as we will be checking) \n\
            \n\ If you would like any specific topics to be included or want more information check out <#763828201612247100>. '
        )
        message.channel.send(newEmbed);
    }
}