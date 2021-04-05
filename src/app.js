require('dotenv').config({ path: './.env' })

const Discord = require("discord.js");

const prefix = '--';
const token = process.env.TOKEN;
const client = new Discord.Client();
const among = "330529905844682752"
const amongTests = "714160735965675521"

const {
    checkEmoji,
} = require('./app/logic/emojisLogic')
const {
    checkRadio,
} = require('./app/logic/radiosLogic')

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
    message.channel.send(
        "'--play <number of the radio>' (try '--play help' to know the available radio options) ---> Start the radio \n'--stop' ---> Stop the radio \n By Lampiola."
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

    const args = message.content.split(" ");
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
        return message.channel.send(
            "You need to be in a voice channel to play music!"
        );
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
        return message.channel.send(
            "I need the permissions to join and speak in your voice channel!"
        );
    }

    const validOption = args[1]
    if (args[1] == null){
        return message.channel.send("Hey, @" + `${message.author}` + " . You need to put a number before the '--play'. Try '--play help' to see the available radios")
    }
    if (validOption == 'help') {
        const newEmbed = await new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setAuthor('Lampiola')
            .setDescription('Choose the preffered radio by type the number of the preferred radio')
            .setTitle('Choose your option:')
            .addFields(
                { name: '1. FM Sergipe (99.5)', value: '-', inline: false },
                { name: '2. Jovem PAN (88.5)', value: '-', inline: false }
            )
        message.channel.send(newEmbed)
    } else if (validOption == '1' || '2') {
        if (validOption == '1') {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection
                .play("http://08.stmip.net:8012/;stream.mp3")
                .on("finish", () => {
                    connection.dispatcher.end();
                })
                .on("error", error => console.error(error));
        }
        if (validOption == '2') {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection
                .play("http://glomes.sintonizar.radio.br:8088/glomesjpa/glomesjpa/icecast.audio?1596215873106")
                .on("finish", () => {
                    connection.dispatcher.end();
                })
                .on("error", error => console.error(error));
        }

    }
    else {
        message.channel.send("Hey, ", author, "this is not a valid option, try '--play help' to see the available radios")
    }

}

process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', promise, 'reason:', reason);
    // Application specific logging, throwing an error, or other logic here
});

client.login(token);