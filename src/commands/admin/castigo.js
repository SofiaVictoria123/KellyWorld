const { Message, GuildMember } = require('discord.js');
const ms = require('ms');

module.exports = {
  name: "castigo",
  aliases: ['castigo'],
  async run(client, message, args) {

const deletarMsgComTempo = (msg, segundos = 10) =>
        setTimeout(() => msg.delete().catch(() => {}), segundos * 1000);
        
if(!message.guild.me.permissions.has("ADMINISTRATOR")) {    
       return message.reply("<:K_zan:924366252024164363>  eu tou sem ah permissão de `ADMINISTRADOR` infelizmente sou inútil ಥ╭╮ಥ") 
}

    if (!message.member.permissions.has('MODERATE_MEMBERS'))
        return message.channel
            .send('Você não tem permissão para usar esse comando')
            .then(deletarMsgComTempo);

    if (!message.guild.me.permissions.has('MODERATE_MEMBERS'))
        return message.channel
            .send('Eu não tenho a permissão necessária para isso')
            .then(deletarMsgComTempo);

    const modoUso = 'K.castigo @user 2h `Flood`';

    /** @type {GuildMember} */

    const membro = message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]) ||
        await message.guild.members.fetch(args[0]).catch(() => {});

 if(membro.id === message.author.id) return message.reply(`${message.author} **Você não pode banir a si mesmo.**`).then(deletarMsgComTempo);

    if (!membro) return message.channel.send(modoUso).then(deletarMsgComTempo);

    if (args.length < 2)
        return message.channel.send(modoUso).then(deletarMsgComTempo);
        
    const tempo = ms(args[1]);

    if (!tempo) return message.channel.send(modoUso).then(deletarMsgComTempo);

    const motivo = args.slice(2) || 'Sem motivo';

    const botNaoConseguePunir = message.guild.me.roles.highest
        .comparePositionTo(membro.roles.highest) < 0;
    if (botNaoConseguePunir)
        return message.channel
            .send(`O cargo de ${membro.displayName} é maior do que o meu`)
            .then(deletarMsgComTempo);

    if (membro.isCommunicationDisabled())
        return message.channel.send('Esse user já está em timeout');

    try {

    /** @type { GuildMember } */

        const membroEmTimeout = await membro.timeout(tempo, motivo);

        message.channel.send(

            `${membroEmTimeout} está em timeout até <t:${~~(

                membroEmTimeout.communicationDisabledUntilTimestamp / 1000

            )}>`

        );

    }

    catch (error) {

        message.channel.send('Erro ao aplicar punição');

        console.log(error);

    }

}

};