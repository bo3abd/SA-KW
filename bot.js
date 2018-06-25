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

  


  
  




const developers = ["415649344864387072","346675179948212225",""]
const adminprefix = "^";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/abdalazizzz");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
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






client.on('message', message => {
    if(message.content === 'السلام عليكم'){
        message.channel.send('وعليكم السلام ')
    }
});


   


client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has ${inviteCount} invites.`);
});
  }
});






client.on('message', message => {
    if(message.content === '.'){
        message.channel.send('test')
    }
});


























/////////////////////////////////

var prefix = "^";

client.on('message', async message => {
      //!fortnite Ninja solo pc
  let Client = require('fortnite');
  let fortnite = new Client('2bb97881-c068-4cba-b3b5-152abfc71c83');
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
    if(message.content.startsWith(prefix + "fortnite")) {
        let username = args[0];
        let platform = args[2] || 'pc';
        let gamemode = args[1];
        if(gamemode != 'solo' && gamemode != 'duo' && gamemode != 'squad' && gamemode != 'lifetime') return message.reply(`**طريقة الاستخدام : ${prefix}fortnite username mode platform**`);
        
    if(!username) return message.reply('**Specify a username!**');
    
    let data = fortnite.user(username, platform).then(data => {
        let stats = data.stats;
        
        if(gamemode === 'solo') {
            let solostats = stats.solo;
            let score = solostats.score;
            let kd = solostats.kd;
            let matches = solostats.matches;
            let kills = solostats.kills;
            let wins = solostats.wins;
            let top3 = solostats.top_3;

            let ByEmbed = new Discord.RichEmbed()
            .setAuthor('Forntite Tracker Solo Stats')
            .setTitle(data.username+"'s Stats")
            .setColor("RANDOM")
            .setThumbnail("https://www.teepublic.com/t-shirt/2412274-fortnite-logo-game-t-shirts")
            .addField('# | Wins:',wins,true)
            .addField('# | Kills:',kills,true)
            .addField('# | Score:',score,true)
            .addField("# | Matches:",matches,true)
            .addField("# | Kill/Death Ratio:",kd,true)
            .addField("# | Top 3:",top3,true)
            
            return message.channel.send(ByEmbed);
            
        }else if (gamemode === 'duo') {
            let Duostats = stats.duo;
            let score = Duostats.score;
            let kd = Duostats.kd;
            let matches = Duostats.matches;
            let kills = Duostats.kills;
            let wins = Duostats.wins;
            let top3 = Duostats.top_3;

            let ByEmbed = new Discord.RichEmbed()
            .setAuthor('Forntite Tracker Duo Stats')
            .setTitle(data.username+"'s Stats")
            .setColor("RANDOM")
            .setThumbnail("https://www.teepublic.com/t-shirt/2412274-fortnite-logo-game-t-shirts")
            .addField('# | Wins:',wins,true)
            .addField('# | Kills:',kills,true)
            .addField('# | Score:',score,true)
            .addField("# | Matches:",matches,true)
            .addField("# | Kill/Death Ratio:",kd,true)
            .addField("# | Top 3:",top3,true)
            
        message.channel.send(ByEmbed);

        }else if(gamemode === 'squad') {
            let squadstats = stats.squad;
            let score = squadstats.score;
            let kd = squadstats.kd;
            let matches = squadstats.matches;
            let kills = squadstats.kills;
            let wins = squadstats.wins;
            let top3 = squadstats.top_3;
            
            let ByEmbed = new Discord.RichEmbed()
            .setAuthor('Forntite Tracker Squad Stats')
            .setTitle(data.username+"'s Stats")
            .setColor("RANDOM")
            .setThumbnail("https://www.teepublic.com/t-shirt/2412274-fortnite-logo-game-t-shirts")
            .addField('# | Wins:',wins,true)
            .addField('# | Kills:',kills,true)
            .addField('# | Score:',score,true)
            .addField("# | Matches:",matches,true)
            .addField("# | Kill/Death Ratio:",kd,true)
            .addField("# | Top 3:",top3,true)
            
            return message.channel.send(ByEmbed);
            
        }else {
            
        
        let lifetime = stats.lifetime;
        let score = lifetime[6]['Score'];
        let mplayed = lifetime[7]['Matches Played'];
        let wins = lifetime[8]['Wins'];
        let winper = lifetime[9]['Win%'];
        let kills = lifetime[10]['Kills'];
        let kd = lifetime[11]['K/d'];
        
                    let ByEmbed = new Discord.RichEmbed()
            .setAuthor('Forntite Tracker Duo Stats')
            .setTitle(data.username+"'s Stats")
            .setColor("RANDOM")
            .setThumbnail("https://www.teepublic.com/t-shirt/2412274-fortnite-logo-game-t-shirts")
            .addField('# | Wins:',wins,true)
            .addField('# | Kills:',kills,true)
            .addField('# | Score:',score,true)
            .addField("# | Matches:",mplayed,true)
            .addField("# | Kill/Death Ratio:",kd,true)
            .addField("# | Win Percentage:",winper,true)
            
        message.channel.send(ByEmbed);
    }
    })
    }
});




////////////////////////////////






















// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
