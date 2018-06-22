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
   
   
   



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
