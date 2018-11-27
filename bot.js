const Discord = require('discord.js');
const bot22 = new Discord.Client();

bot22.on('ready', () => {
  console.log('Logged in as S22-23-24')
});


bot22.on('message', message => {
  if(message.content.startsWith('f-d')){
    message.channel.send('#daily')
  }
});


bot22.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    message.channel.send(`#rep <@510098846970281984>`)
  }
});


bot22.on('ready', () => {
  let ch = bot22.guilds.get("507972785650401301").channels.find(c => c.id == "515839527416234014");
  setInterval(function() {
    ch.send("22th Lover")
  }, 900);
});


bot22.on('message', message => {
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.reply(`شو يدك امي تقول؟؟؟`);
  if(command == "f22"){
    message.channel.send(args.join(" "))
  }
});


bot22.login(process.env.FB22);
////////////////////////
////////////////////////
const bot23 = new Discord.Client();
bot23.on('message', message => {
  if(message.content.startsWith('f-d')){
    message.channel.send('#daily')
  }
});


bot23.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    message.channel.send(`#rep <@510098846970281984>`)
  }
});


bot23.on('ready', () => {
  let ch = bot23.guilds.get("507972785650401301").channels.find(c => c.id == "515839527416234014");
  setInterval(function() {
    ch.send("23th Lover")
  }, 900);
});


bot23.on('message', message => {
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.reply(`شو يدك امي تقول؟؟؟`);
  if(command == "f23"){
    message.channel.send(args.join(" "))
  }
});


bot23.login(process.env.FB23);
////////////////////////
////////////////////////
const bot24 = new Discord.Client();
bot24.on('message', message => {
  if(message.content.startsWith('f-d')){
    message.channel.send('#daily')
  }
});


bot24.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    message.channel.send(`#rep <@510098846970281984>`)
  }
});


bot24.on('ready', () => {
  let ch = bot24.guilds.get("507972785650401301").channels.find(c => c.id == "515839527416234014");
  setInterval(function() {
    ch.send("24th Lover")
  }, 900);
});


bot24.on('message', message => {
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.reply(`شو يدك امي تقول؟؟؟`);
  if(command == "f24"){
    message.channel.send(args.join(" "))
  }
});


bot24.login(process.env.FB24);
