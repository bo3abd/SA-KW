const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});


  var prefix = "^";

  


  client.on("message", message =>{
  if (!message.content.startsWith(prefix)) return;

  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (!message.author.id == 415649344864387072) return;

if (message.content.startsWith(prefix + 'setply')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** تم تغير الحاله الى`)
} else

if (message.content.startsWith(prefix + 'stream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/Mishary00_");
    message.channel.sendMessage(`**${argresult}** تم تغير الحاله الى`)
} else

if (message.content.startsWith(prefix + 'name')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** تم تغير الاسم الى  `)
  return message.reply("**لا يمكنك تغير الاسم الى بعد ساعتين **");
} else
if (message.content.startsWith(prefix + 'pic')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير الصوره الى`);
}
  if (message.content.startsWith(prefix + 'watching')) {
  if (message.author.id !== '415649344864387072') return message.reply('**لا يمكن تغير الحاله**')
      client.user.setActivity(argresult, {type : 'cc'});
   message.channel.sendMessage(`**${argresult}** : تم تغير الحاله الى`)
  }
  
   });
   
   




client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` تم ارسال`); 
 message.delete(); 
};     
});






client.on('message', message => {
    if (message.content === "^id") {
    var year = message.createdAt.getFullYear()
    var month = message.createdAt.getMonth()
    var day = message.createdAt.getDate()
         let embed = new Discord.RichEmbed()
         .setAuthor(message.author.username, message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)
        .addField("**اسمك:**",  '**[ ' + `${message.author.username}` + ' ]**')
          .setThumbnail(message.author.avatarURL)
                   .setFooter(`${message.author.username}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
      .addField('الكود الخاص بك:', message.author.discriminator)
      .addField("**عدد الايام منذ افتتاح حسابك:**", message.author.createdAt.getDate())
        .addField("** تم افتتاح حسابك عام:**", message.createdAt.getFullYear())
            .addField("** عدد الشهور منذ افتتاح حسابك:**", message.createdAt.getMonth())
    
      message.channel.send({embed});
        }
});








client.on('message', function (message) {
    var messageParts = message.content.split(' ');

    var command = messageParts[0].toLowerCase();
    var parameters = messageParts.splice(1, messageParts.length);


    switch (command) {
        case "^join":
        if(message.guild.voiceConnection){
            message.reply('I\'m Already In A Voice Connection!');
        }else if(!message.member.voiceChannel){
            message.reply('You\'re Not In A Voice Channel!');
        }else{
    let channel = message.member.voiceChannel;
    channel.join();
        }
            break;
case "^play":
        if(!message.guild.voiceConnection){
            message.reply('I\'m Not In A Voice Channel!');
        }else{
//كود بدء الموسيقى مالك
        }
            var voiceConnection = client.voiceConnections.first();

            break;
}
});














   



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
