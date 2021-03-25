const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('addadmin', {
            aliases: ['aa']
        });
    }

    async exec(message) {
        let Owner = message.author;
        if(Owner.id !== "603269203511738420") return message.reply("Only the bot owner can use this command!")
        const role = message.guild.roles.cache.find(role => role.name === 'hi');
        let guildMember = message.member;
        guildMember.roles.add(role)
    }
}

module.exports = PingCommand;
