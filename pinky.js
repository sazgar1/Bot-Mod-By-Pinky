const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "";

client.on("ready", () => {
  console.log('✮✮✮✮✮✮✮✮✮✮✮✮✮✮');
  console.log('By Pinky');/////Pinky 
console.log('✮✮✮✮✮✮✮✮✮✮✮✮✮✮');
console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`${prefix}help | ${client.guilds.size} Guilds`)///////Pinky Is One
 client.user.setStatus("idle")/////Pinky Up
  console.log(`Logined`)
})

client.on("message", async message => {
  if (message.content.toLowerCase() === prefix + "profile") {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 200).then(
      message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${message.author.id}`
          }
        ]
      })
    );
  }
});

client.on("message", message => {
  if (message.content === prefix + "lock") {
    if (!message.channel.guild) return message.reply(" <a:emoji_1:822625385032056832> |Chat Locked  ");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" <a:emoji_2:822625385032056832> | You Dont have permission");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
    message.channel.send(`**__<a:emoji_12:809105036772114442> Success Moved All To Your Channel__**`);
        message.reply(" <a:emoji_1:822625385032056832> | lock chat ");
      });
  }
  if (message.content === prefix + "unlock") {
    if (!message.channel.guild) return message.reply(" | not server");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" <a:emoji_2:822625385032056832> |You Dont have permission");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
    message.channel.send(`**__<a:emoji_12:809105036772114442> Success Moved All To Your Channel__**`);
        message.reply(" <a:emoji_1:822625385032056832> | Chat Unlocked  **");
      });
  }
});

client.on("message", async msg => {
  if (msg.content === prefix + "server") {
    var w1 = msg.guild.createdAt.getFullYear();
    var w2 = msg.guild.createdAt.getMonth();
    var w3 = msg.guild.createdAt.getDate();
    let embed = new Discord.RichEmbed()
      .addField("**  <a:emoji_35:822641770902978610> |NAME SERVER**: ", msg.guild.name)
      .addField("**  <a:emoji_35:822641770902978610> |ID SERVER**:", msg.guild.id)
      .addField("**  <a:emoji_35:822641770902978610> |OWNER SHIP **: ", msg.guild.owner)
      .addField("**  <a:emoji_35:822641770902978610> |MEMBER COUNT**: ", msg.guild.memberCount)
      .addField("**  <a:emoji_35:822641770902978610> |REGION SERVER**: ", msg.guild.region)
      .addField("**  <a:emoji_35:822641770902978610> |CHANNEL COUNTS**: ", msg.guild.channels.size)
      .addField("**  <a:emoji_35:822641770902978610> |ROLES COUNTS**: ", msg.guild.roles.size)
      .setColor("RANDOM")
      .setImage(
        "https://cdn.discordapp.com/attachments/805927580930146325/807011849827909662/591025441004060684.gif"
      )
      .setFooter(`${msg.guild.name}`);
    msg.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  //Turbo Codes
  var args = message.content.split(" ").slice(1); //Turbo Codes
  if (message.content.startsWith(prefix + "id")) {
    //Turbo Codes
    var year = message.author.createdAt.getFullYear();
    var month = message.author.createdAt.getMonth();
    var day = message.author.createdAt.getDate();
    var men = message.mentions.users.first(); //Turbo Codes
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" "); //Turbo Codes
    if (args == "") {
      //Turbo Codes
      var z = message.author; //Turbo Codes
    } else {
      var z = message.mentions.users.first(); //Turbo Codes
    }

    let d = z.createdAt; //Turbo Codes
    let n = d.toLocaleString(); //Turbo Codes
    let x;
    let y;

    if (z.presence.game !== null) {
      //Turbo Codes
      y = `${z.presence.game.name}`; //Turbo Codes
    } else {
      y = "|No Playing... ."; //Turbo Codes
    }
    if (z.bot) {
      var w = "Bot"; //Turbo Codes
    } else {
      var w = "Member";
    }
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField(
        " <a:emoji_26:822641445130207264> | Name:",
        `**<@` + `${z.id}` + `>**`,
        true
      )
      .addField(
        " <a:emoji_35:822641770902978610> | Id:",
        "**" + `${z.id}` + "**",
        true
      )
      .addField(
        " <a:emoji_35:822641770902978610> | Playing:",
        "**" + y + "**",
        true
      )
      .addField(
        " <a:emoji_35:822641770902978610> | Your account",
        "**" + w + "**",
        true
      )
      .addField(
        " <a:emoji_35:822641770902978610> | Id member:",
        "**#" + `${z.discriminator}**`,
        true
      ) //Turbo Codes
      .addField(
        "** <a:emoji_35:822641770902978610> |Time joined server   :**",
        message.member.joinedAt.toLocaleString()
      ) //Turbo Codes
     
      
      
      .addField(
        " ** <a:emoji_35:822641770902978610> |End message  :**",
        message.author.lastMessage
      )
      .setImage(
        "https://cdn.discordapp.com/attachments/805927580930146325/807011849827909662/591025441004060684.gif"
      )
      .setThumbnail(`${z.avatarURL}`)
      .setFooter(message.author.username, message.author.avatarURL);

    message.channel.send({ embed });
    if (!message)
      return message.reply("**Put the minchan right**").catch(console.error); //Turbo Codes
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "boy")) {
    let man = [
      "https://media.discordapp.net/attachments/786897044483604490/803870769313480714/Enes_Acar_GIF_70.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870793716858880/a_57a7f6c875e3a329b170edf177392911.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870817351368734/5-2.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804007829010513966/image1.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804007829483552838/image3.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804219672513478706/Lenora_36.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804220384899498064/Lenora_28.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804220394697392158/Lenora_33.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804315371271749662/image0-20.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804968359572930580/ALANIS_MAN_GIF_156.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804968381816111124/image0-5.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804760463044640808/ALANIS_MAN_GIF_99.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870704999202836/ENES_ACAR_GIF_104.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870737941135421/ENES_ACAR_GIF_15.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870682479067166/ENES_ACAR_GIF_135.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} BOY GIFS pinky up`,
          image: {
            url: man[Math.floor(Math.random() * man.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "girl")) {
    let girl = [
      "https://media.discordapp.net/attachments/786897045436366849/804968189892755456/image2-1.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968223577604126/gif472.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968231794245642/rexsin_212.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968258859827210/pintrst___luri_4.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804983128527077387/a_177ddfe86ad32b68be6200f007682136.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805008600334073866/3WIu.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805370008330436648/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805008566439641128/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804681217022099466/a_3c85d4517fbaf4f750d344820b49c076.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804682936615829504/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804314115601596426/ALANIS_WOMAN_GIF_176.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804280612227383316/ALANIS_WOMAN_GIF_138.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} GIRL GIFS  pinky up`,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "sad")) {
    let sads = [
      "https://media.discordapp.net/attachments/786897045952790550/798719676795715614/Zeyrox_43.gif",
      "https://media.discordapp.net/attachments/786897045952790550/799435191323852820/luisa1-1.gif",
      "https://media.discordapp.net/attachments/786897045952790550/799435254011920404/a_caf4fdc4f3e516fcabec0022078c38ab.gif",
      "https://media.discordapp.net/attachments/786897045952790550/804040753072439326/038842117446a0c76a922d23727942b1.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787581071079768074/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787581004424544256/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787580974975549450/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787580943627976704/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/802930927784820766/Cedric_Anime_Gif_81.gif",
      "https://media.discordapp.net/attachments/786897045952790550/802722301984243712/a_66f26e072e89a58c1879c6fa27744bd7.gif",
      "https://media.discordapp.net/attachments/786897045952790550/801054305569865778/uzgun-4.gif",
      "https://media.discordapp.net/attachments/786897044483604490/806288916160315422/image0.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} **SAD GIFS pinky up**`,
          image: {
            url: sads[Math.floor(Math.random() * sads.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "nick")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send("Please Check Your Permission.");
    if (!message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send("Please Check My Permission.");
    let user = message.mentions.users.first();

    if (!user)
      return message.channel.send(`**>>> ${prefix}nick @mention nickname**`);
    let args = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!args)
      message.guild
        .member(user)
        .setNickname("")
        .then(m => {
          message.channel.send(
            " " + user.username + " has been reseted nickname "
          );
        })
        .catch(error => {
          message.channel.send("Error: **" + error.message + "**");
        });
    message.guild
      .member(user)
      .setNickname(args)
      .then(m => {
        let embed = new Discord.RichEmbed()
          .setTitle("Nicknamed User!")
          .setDescription(
            "User: ```" +
              user.username +
              "```\nBy: ```" +
              message.author.username +
              "```\nNickname: ```" +
              args +
              "``` "
          );
        message.channel.send(embed);
      })
      .catch(error => {
        message.channel.send("Error: **" + error.message + "** ");
      });
  }
  if (message.content.toLowerCase() === prefix + "help nick") {
    let nick = new Discord.MessageEmbed()
      .setTitle(`Command: nick`)
      .addField("Usage", `${prefix}nick @user nickname`)
      .addField("Information", "Nicknames");
    message.channel.send(nick);
  }
});
    
client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "about") {
    const bot = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor("RANDOM")
      .addField(
        " <a:emoji_35:822641770902978610>|**PING BOT** : ",
        `» ${Date.now() - message.createdTimestamp}` + " ms",
        true
      )
      .addField(
        " <a:emoji_35:822641770902978610>|**SERVERS** :  ",
        `» ${client.guilds.size}`,
        true
      )
      .addField(
        " <a:emoji_35:822641770902978610>|**CHANNELS** : ",
        `» ${client.channels.size} `,
        true
      )
      .addField(
        " <a:emoji_35:822641770902978610>|**BOT NAME** :  ",
        `» ${client.user.tag} `,
        true
      )
      .addField(
        " <a:emoji_35:822641770902978610>|**OWNER BOT** :  ",
        `» <@790232202134421554>`,
        true
      ) // تعديل مهم عدل هذا الرقم لايدي حسابك
      .setImage(
        "https://cdn.discordapp.com/attachments/738017519981559881/742193038536736858/591025441004060684.gif"
      )
      .setFooter(message.author.username, message.author.avatarURL);
    message.channel.send(bot);
  }
});

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(NoNo => {
          message.guild.unban(NoNo);
        });
      });
      return message.channel.send("**<a:emoji_1:822625385032056832> Unbanned all members **");
    }
    if (!args)
      return message.channel.send("**Please Type the member ID / all**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(`**<a:emoji_1:822625385032056832> Unbanned ${m.username}**`);
      })
      .catch(stry => {
        message.channel.send(
          `**<a:emoji_69:827215438710308865> - I can't find \`${args}\` in the ban list**`
        );
      });
  }
});
        
client.on("message", message => {
  if (message.content === prefix + "help") {
    var addserver = `https://discord.gg/F8ng6crDU4`;
    var SUPPORT = `https://discord.gg/F8ng6crDU4`;
    var website = ``;
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setThumbnail(message.author.avatarURL)
      .setFooter("Pinky Mod Help Commands")
      .setImage(
        "https://cdn.discordapp.com/attachments/751364422936559646/757658677414199386/image0.gif"
      )
      .setColor("RANDOM").setDescription(` 
    
**__List of all commands__**
• ────── <a:emoji_42:823438122461167617> ────── •
☢◢**__User Commands__**

profile - about - id
avatar - server
• ──────  ────── •
**__Moderator Commands__**

lock - unlock
ban - unban - nick
• ──────  ────── •
**__Gifs Commands__**

boy - girl - sad
• ──────  ────── •
**__Links__**

| [ Support](https://discord.gg/F8ng6crDU4) 
| [ Invite](https://discord.com/api/oauth2/authorize?client_id=826539670061056110&permissions=8&scope=bot) 
`);
    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "avatar")) {
    if (!message.channel.guild) return;
    var mentionned = message.mentions.users.first();
    var client;
    if (mentionned) {
      var client = mentionned;
    } else {
      var client = message.author;
    }
    const embed = new Discord.RichEmbed()
      .addField("Requested by:", "<@" + message.author.id + ">")
      .setColor("RANDOM")
      .setImage(`${client.avatarURL}`)
      .setFooter("");
    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content === prefix + "date") {
    if (!message.channel.guild) return;
    var currentTime = new Date(),
      hours = currentTime.getHours() + 4,
      hours2 = currentTime.getHours() + 3,
      hours3 = currentTime.getHours() + 2,
      hours4 = currentTime.getHours() + 3,
      minutes = currentTime.getMinutes(),
      seconds = currentTime.getSeconds(),
      Year = currentTime.getFullYear(),
      Month = currentTime.getMonth() + 1,
      Day = currentTime.getDate();
    var h = hours;
    if (hours > 12) {
      hours -= 12;
    } else if (hours == 0) {
      hours = "12";
    }
    if (hours2 > 12) {
      hours2 -= 12;
    } else if (hours2 == 0) {
      hours2 = "12";
    }
    if (hours3 > 12) {
      hours3 -= 12;
    } else if (hours3 == 0) {
      hours3 = "12";
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    var suffix = "AM";
    if (hours >= 12) {
      suffix = "PM";
      hours = hours - 12;
    }
    if (hours == 0) {
      hours = 12;
    }

    var Date15 = new Discord.RichEmbed()
      .setThumbnail("https://i.imgur.com/ib3n4Hq.png")
      .setTitle("『TIME AND DATE』")
      .setColor("RANDOM")
      .setFooter("Pinky Mod")
      .setFooter(message.author.username, message.author.avatarURL)
      .addField("Time", "『" + hours2 + ":" + minutes + ":" + seconds + "』")

      .addField("Date", "『" + Day + "-" + Month + "-" + Year + "』");

    message.channel.sendEmbed(Date15);
  }
});

client.on("guildMemberAdd", async member => {
         let moment = require("moment"),  
           moment2 = require("moment-duration-format"),
                 date = moment.duration(new Date() - member.user.createdAt).format("d");
 
          if(date < 10) {
              member.ban("Please Don't Account Fake")
          }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "ban")) {
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel
        .send(" **you need the** ``BAN MEMBER`` **permission!**")
        .then(msg => msg.delete(3000));
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
      return message.channel
        .send(" **I need the** ``BAN MEMBER ``  **permission!** ")
        .then(msg => msg.delete(3000));
    var mention = message.mentions.members.first();
    if (!mention)
      return message.channel.send(`** MENTION SOMEONE |  <a:emoji_2:822625723251818536> **`);
    let edward = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(`**${mention} <a:emoji_1:822625385032056832> | Has been Banned From The Server! **`)
      .setColor("RANDOM")
      .setColor("RANDOM")
      .setTimestamp()

      .setFooter(mention.user.username, mention.user.avatarURL);
    mention
      .ban()
      .then(member => {
        // Successmessage
        message.channel.sendEmbed(edward);
      })
      .catch(error => {
        let errora = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setColor("RANDOM")
          .setDescription(
            `** <a:emoji_2:822625723251818536> I Cant Ban ${mention} Its ` + "``" + `${error}` + "``" + `**`
          );
        message.channel.sendEmbed(errora);
      });
  }
});

// Events

client.login("ADD TOKEN BOT");
