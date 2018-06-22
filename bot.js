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

  
  
  
  client.on('message', async function (message)  {
if(message.content.startsWith("server")) {
const vlevel = ['None', 'Low (Must have verified email)', 'Medium (Must be register for 5 mineuts)', 'High (Need to wait 10 minutes)', 'Very High (Need verified phone on account)']
const members = await message.guild.members.filter(m=> m.presence.status === 'online').size + message.guild.members.filter(m=> m.presence.status === 'idle').size + message.guild.members.filter(m=> m.presence.status === 'dnd').size  
message.channel.send(new discord.RichEmbed() 
.setAuthor(`${message.guild.name} [Server Icon URL]`, message.guild.iconURL)
.setURL(message.guild.iconURL)
.addField('ًں†” Server ID', message.guild.id, true)
.addField('ًں‘‘ Server Owner', message.guild.owner, true)
.addField('ًں—؛ Region', message.guild.region, true)
.addField(`ًں‘¥ Members [${message.guild.memberCount}]`, `${members} online` ,true)
.addField(`ًں’¬ Channels`, `**${message.guild.channels.filter(c => c.type === 'category').size}** Categories | **${message.guild.channels.filter(c=> c.type === 'text').size}** Text | **${message.guild.channels.filter(c=> c.type === 'voice').size}** Voice` ,true)
.addField(`ًں’  Verification Level`, vlevel[message.guild.verificationLevel] ,true)
.addField(`ًں‘” Roles`, message.guild.roles.size ,true)
.addField(`ًں“† Created On`, message.guild.createdAt ,true)
)
}
})





client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : ط¹ط¯ط¯ ط§ظ„ط§ط¹ط¶ط§ط، ط§ظ„ظ…ط³طھظ„ظ…ظٹظ†`); 
 message.delete(); 
};     
});







const moment = require("moment");
client.on('message', async message => {
    if (!message.channel.guild) return undefined;
    let time = moment().format('Do MMMM YYYY , hh:mm');
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "1bc")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_SERVER")) return message.reply("**# You don't have the needed permissions!**");
        if(!args) return message.reply("**# Supply a message!**");
        message.channel.send(`\`\`- Name:\`\`\n${message.author}\n\n\`\`- Date:\`\`\n${time}\n\n\`\`- Message:\`\`\n${args}\n\n__# | You have 15s to say Yes or No__`)
.then(() => {
  message.channel.awaitMessages(response => response.content === 'yes', {
    max: 1,
    time: 15000,
    errors: ['time'],
  })
  .then((collected) => {
                let bcEmbed = new Discord.RichEmbed()
          .setAuthor(`${message.author.username}#${message.author.discriminator}`,message.author.avatarURL)
          .setThumbnail(message.guild.iconURL || message.guild.avatarURL)
          .addField('- Sender:',message.author)
          .addField('- Server:',message.guild.name)
          .addField('- Message:',`\`\`\`${args}\`\`\``);
          message.guild.members.forEach(m => m.sendMessage(bcEmbed));
          message.channel.send(`**Done!, Sent the message to: \`${message.guild.members.size}\` members!**`);
      
  });
});
    } else {
          message.channel.awaitMessages(response => response.content === 'no', {
    max: 1,
    time: 15000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send("__- Canceled!__")
    });
    }
});







  client.on("message", message =>{
  if (!message.content.startsWith(prefix)) return;

  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (!message.author.id == 415649344864387072) return;

if (message.content.startsWith(prefix + 'setply')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** : طھظ… طھط؛ظٹظٹط± ط§ظ„ط­ط§ظ„ط©`)
} else

if (message.content.startsWith(prefix + 'stream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/Mishary00_");
    message.channel.sendMessage(`**${argresult}** :طھظ… طھط؛ظٹظٹط± ط§ظ„ط­ط§ظ„ط© ط§ظ„ظ‰ ط³طھط±ظٹظ…ظ†ط¬`)
} else

if (message.content.startsWith(prefix + 'name')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : طھظ… طھط؛ظٹط± ط§ظ„ط£ط³ظ…`)
  return message.reply("**ظ„ط§ طھط³طھط·ظٹط¹ طھط؛ظٹط± ط§ظ„ط£ط³ظ… ط§ظ„ط§ ط¨ط¹ط¯ ط³ط§ط¹طھظٹظ†**");
} else
if (message.content.startsWith(prefix + 'pic')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : طھظ… طھط؛ظٹط± طµظˆط±ط© ط§ظ„ط¨ظˆطھ`);
}
  if (message.content.startsWith(prefix + 'watching')) {
  if (message.author.id !== '415649344864387072') return message.reply('** ظ‡ط°ط§ ط§ظ„ط£ظ…ط± ظپظ‚ط· ظ„طµط§ط­ط¨ ط§ظ„ط¨ظˆطھ ظˆ ط´ظƒط±ط§ظ‹ظ‹ **')
      client.user.setActivity(argresult, {type : 'cc'});
   message.channel.sendMessage(`**${argresult}** : طھظ… طھط؛ظٹظٹط± ط§ظ„ظˆظˆطھط´ظٹظ†ظ‚ ط§ظ„ظ‰`)
  }
  
   });
   
   
   
client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '^join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply(':ok:');
        })
        .catch(console.log);
    } else {
      message.reply('ظٹط¬ط¨ ط§ظ†طھظƒظˆظ† ظپظٹ ط±ظˆظ… طµظˆطھظٹ ');
    }
  }
});




client.on('message', message => {
if(message.content.startsWith(prefix + 'moveall')) {
 if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
   if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
if (message.member.voiceChannel == null) return message.channel.send(`**You need to be in Voice Channels**`)
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send(`**All members have been withdrawn**`)


 }
   });

   




























// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
