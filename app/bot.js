require('dotenv').config({ path: '../.env' })

const Discord = require("discord.js");
const prefix = '--';
const token = process.env.TOKEN;
const ytdl = require("ytdl-core");
const client = new Discord.Client();

client.once("ready", () => {
    console.log("Ready!");
});

client.once("reconnecting", () => {
    console.log("Reconnecting!");
});

client.once("disconnect", () => {
    console.log("Disconnect!");
});

client.on("message", async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;


    if (message.content.startsWith(`${prefix}play`)) {
        message.channel.send(
            "Ok, let's play!"
        )
        play(message);
        return;
    } else if (message.content.startsWith(`${prefix}stop`)) {
        stop(message);
        return;
    }
    else if (message.content.startsWith(`${prefix}help`)) {
        help(message);
        return;
    } else {
        message.channel.send("You need to enter a valid command!");
    }
});

async function help(message) {
    return message.channel.send(
        "--play ---> Iniciar o Radio \n--stop ---> Parar o Radio"
    );
        
}

async function stop(message) {
    if (!message.member.voice.channel)
    return message.channel.send(
        "You have to be in a voice channel to stop the music!"
    );
    const connection = await message.member.voice.channel.join();
    return connection.disconnect();
        
}

async function play(message) {
    const connection = await message.member.voice.channel.join();
    const dispatcher = connection
        .play("http://08.stmip.net:8012/;stream.mp3")
        .on("finish", () => {
            connection.dispatcher.end();
        })
        .on("error", error => console.error(error));
}

client.login(token);