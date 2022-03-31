var Discord = require("discord.js");
var Client = new Discord.Client({ intents: [] });
const ytdl = require("ytdl-core");
// const amount = client.sweepMessages(7200);

Client.on("ready", () => {
    console.log("Ready")

});

Client.on("message", message => {
    if (message.content.startsWith(prefix+ "play")) {
        if (message.member.voice.channel) {
            message.member.voice.channel.join().then(Connection => {
                if (!arg[1]) {
                    message.reply("Lien de la video incorrecte ou indisponible")
                }
                else {
                    let args = message.content.split("");
                    let dispatcher = connection.play(ytdl(args[1], { quality: "highestaudio", highWaterMark: 1 << 25 }));
                    dispatcher.on("finish", () => {
                        dispatcher.destroy();
                    });
                    dispatcher.on("error"), err => {
                        console.log("Probleme avec le dispatch : " + erreur);
                    };
                }
            }).catch(erreur => {
                message.reply("Probleme de connexion : " + erreur)
            });
        }
        else {
            message.reply("Connecte toi a un channel vocal");
        }
    }

if(message.content.startsWith(prefix+"clear"))
    console.log(`Successfully removed ${amount} messages from the cache.`);
})

Client.login("OTU2ODYxNTYzMzM0MTcyNjgz.Yj2Yxg.-8G-TrUlGFmrJq3tATC-p21Kn74");  
