const Discord = require("discord.js");
const { JsonDatabase } = require('kettraworld.db');
const db = new JsonDatabase({
  DatabaseJson:"./src/database/database.json"
});

module.exports =  {
    name: "icon", 
    description: "🖼️ Want to see the server icon?", 
    type: "CHAT_INPUT",
    
    run: async (client, interaction, args) => {
        
    let language = db.get(`language_${interaction.guild.id}`);
    if( language == null ) { 
      db.set(`language_${interaction.guild.id}`, "pt");
    }
  
    if (language === "pt") {
        if(!interaction.guild.me.permissions.has("ADMINISTRATOR")) {
  return interaction.reply("<:K_zan:924366252024164363> eu tou sem ah permissão de `ADMINISTRADOR` infelizmente sou inútil ಥ╭╮ಥ")
  };
  
  const sicon = interaction.guild.iconURL({ dynamic : true, format: "png", size: 1024});
  const svicon = interaction.guild.iconURL()
  
  const embed = new Discord.MessageEmbed()
       .setTitle(`Ícone do servidor:`)
       .setDescription(`[Link da imagem aqui](${sicon})`)
       .setImage(sicon)
       .setColor('#ef00ff')
    await interaction.reply({ embeds: [embed] })
    }
    
    if (!language || language === "en") {
      if(!interaction.guild.me.permissions.has("ADMINISTRATOR")) {
    return interaction.reply("<:K_zan:924366252024164363> I'm without `ADMINISTRATOR` permission unfortunately I'm useless ಥ╭╮ಥ")
      };
      
      const sicon = interaction.guild.iconURL({ dynamic : true, format: "png", size: 1024});
  const svicon = interaction.guild.iconURL()
      
    const embed = new Discord.MessageEmbed()
        .setTitle(`Server icon:`)
        .setDescription(`[Image link here](${sicon})`)
        .setImage(sicon)
        .setColor('#ef00ff')
    await interaction.reply({ embeds: [embed] })
    }
    
       if (!language || language === "es") {
       if(!interaction.guild.me.permissions.has("ADMINISTRATOR")) {
    return interaction.reply("<:K_zan:924366252024164363> No tengo permiso de `ADMINISTRADOR` lamentablemente soy un inútil ಥ╭╮ಥ")
      };
      
      const sicon = interaction.guild.iconURL({ dynamic : true, format: "png", size: 1024});
  const svicon = interaction.guild.iconURL()
      
    const embed = new Discord.MessageEmbed()
       .setTitle(`Icono del servidor:`)
       .setDescription(`[Enlace de imagen aquí](${sicon})`)
       .setImage(sicon)
       .setColor('#ef00ff')
    await interaction.reply({ embeds: [embed] })
       }
}
	  }
