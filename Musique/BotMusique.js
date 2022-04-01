var Discord = require("discord.js");
var Client = new Discord.Client({ intents: [] });
const ytdl = require("ytdl-core");
let prefix = "!";
//Clears the chat of messages
const amount = client.sweepMessages(7200);

client.on("ready", () => {
  console.log("Bot is online!");
  client.user.setActivity("Musique", { type: "LISTENING" });
});
Client.on("message", (message) => {
  if (message.content.startsWith(prefix + "play")) {
    if (message.member.voice.channel) {
      message.member.voice.channel
        .join()
        .then((Connection) => {
          if (!arg[1]) {
            message.reply("Lien de la video incorrecte ou indisponible");
          } else {
            let args = message.content.split("");
            let dispatcher = connection.play(
              ytdl(args[1], { quality: "highestaudio", highWaterMark: 1 << 25 })
            );
            dispatcher.on("finish", () => {
              dispatcher.destroy();
            });
            dispatcher.on("error"),
              (err) => {
                console.log("Probleme avec le dispatch : " + erreur);
              };
          }
        })
        .catch((erreur) => {
          message.reply("Probleme de connexion : " + erreur);
        });
    } else {
      message.reply("Connecte toi a un channel vocal");
    }
  }

  if (message.content.startsWith(prefix + "stop")) {
    if (message.member.voice.channel) {
      message.member.voice.channel.leave();
    } else {
      message.reply("Connecte toi a un channel vocal");
    }
  }
  if (message.content.startsWith(prefix + "ping")) {
    message.reply("Pong!");
  }
  if (message.content.startsWith(prefix + "clear")) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.reply("Tu n'as pas la permission de faire ceci");
    } else {
      message.channel.bulkDelete(amount);
      message.channel.send("J'ai supprimé " + amount + " messages");
    }
  }

  if (message.content.startsWith(prefix + "help")) {
    message.reply(
      "Voici la liste des commandes : \n !play <lien de la video> \n !stop \n !help \n '!clear <nombre de messages> \n !ping"
    );
  }
});

if (process.env.TOKEN) {
  client.login(process.env.TOKEN);
} else {
  console.log("Token not found");
} //Token