const { Command } = require('discord-akairo');
const { resolve } = require('path');

class RecentCommand extends Command {
    constructor() {
        super('massdm',{
            aliases: ['dmall'],
            args: [
                {
                    id: 'ID'
                }
            ],
            channel: 'guild'
        });
    }

    async exec(message, client) {
        if(message.author.id !== "603269203511738420")
        return message.channel.send("why you trying?")

        let text = message.content.slice(`+dmall`.length);
        message.guild.members.cache.forEach(member => {
            member.send(text)

        })
  }
}

module.exports = RecentCommand;
