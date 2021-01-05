module.exports = {
    name: 'rules',
    description: "This is an embeded message",
    execute(message, args, client, Discord){
        const emoji_x=':no_entry_sign: '
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('__***Chat Rules:***__')
        .setDescription(
            '**1. No spamming or flooding the chat with messages. Do not type in ALL CAPS.**\n\
            \n\**2. No text walls or a large paragraphs of text.**\n\
            \n\**3. No bashing or heated arguments to other people in the chat.**\n\
            \n\**4. No adult (18+), explicit, or controversal messages.**\n\
            \n\**5. No racist or degrading content (racial terms are not allowed).**\n\
            \n\**6. No excessively cursing.**\n\
            \n\**7. No advertising other sites/discord servers (Permission must be requested from Staff).**\n\
            \n\**8. No offensive names.**\n\
            \n\**9. Do not cause a nuisance in the community, repeated complaints from several members will lead to administrative action.**\n\
            \n\**10. Do not argue with staff. Decisions are final.**\n\
            \n\
            \n\If you have any questions, ask <@&775105358552498217>'
        )
        message.channel.send(newEmbed);
    }
}