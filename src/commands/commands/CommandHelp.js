//Importing the packages used in this command!
const Discord = require("discord.js");

//Import module accepted by hadler!
module.exports = {   
  name: "ajuda",
  aliases: ['help','ajuda'],
  run: async(client, message) => {

  //We define the message in embed!
  let help = new Discord.MessageEmbed()
       .setColor("RANDOM")
       .setTitle("<:K_Confirmado:947545327374843965> Ajuda da Kelly")
	     .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
       .setDescription(`Olá ${message.author}, me chamo KellyWorld ( ou para meus amigos(as) mais próximos(as), de "Kelly") e eu só quero um lugar onde posso interagir....\n\nEu tenho poderes surpreendentes que podem encantar qualquer um! Por exemplo posso mostra seu rosto, ou o rosto do seu amigo.....mais  deixa pra lá.`)
       .addFields(
		{ name: '<:K_:947545349151653898> Quer ver algumas das coisas que eu fasso?', value: '"_cuidado com poderes grandes possibilidades!_"' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
       
      message.reply({ embeds: [help] });
  }
  //is this the end of the code? yes it is the end of the code! 
};