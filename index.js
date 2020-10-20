const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', msg => {
  if(msg.channel.id === "656613130067116073"){
    if(msg.author.id === "755580145078632508"){
      msg.channel.send("h!trick").then(msg => {
        msg.delete(500)
      })
      msg.channel.send("h!treat").then(msg => {
        msg.delete(500)
      })
      console.log("Tentative effectué")
    }
  }
});
 
client.login('');