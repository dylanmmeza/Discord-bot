module.exports = {
    name: 'verify',
    description: "vefiry page",
    execute(message, args, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF5733')
        .setTitle('__***Verification***__')
        .setDescription(
            'By reacting with the check mark above, you will gain access to the rest of the server and you agree to all the rules, <#778716650077683712>. If you have any issues please contact<@575252669443211264>. Once you have access, head to <#779156186728628245> to check out how the server works and <#778776161488338975> to set up custom alerts!'
        )
        message.channel.send(newEmbed);
    }
}