const { Command } = require('discord-akairo');
const { MessageEmbed } = require("discord.js");

class HelpCommand extends Command {
    constructor() {
        super('help', {
            aliases: ['help', 'commands', 'info'],
            channel: 'guild'
        });
    }

    async exec(message,client,args) {
        const user = message.mentions.members.first() || message.member;
            let helpArray = message.content.split(" ");
            let helpArgs = helpArray.slice(1);
    if(!message.content.startsWith('>'))return;
    const prefix = message.guild.prefix;

        const commands = [
            `*The prefix is currently **\`${prefix}\`***\n`,
            `*The following categories are available, running them displays more information and parameters:* **\`prefix\` \`help\` \`limits\` \`recent\` \`reset\`**`
        ];

        const info = [
            `**[bot invite](https://discord.com/api/oauth2/authorize?client_id=718097261183369296&permissions=0&scope=bot)**`
        ];

        const mysocials = [
            `*Add my discord if you need any help:* **\`vile#3030\`**`
        ];
const embed = new MessageEmbed()
    .setFooter("Searched by " + message.author.tag)
    .setImage("https://cdn.discordapp.com/attachments/682659152937484386/748748373665906748/tumblr_8e35245ae2fe9997f6fdc739fdd9688f_48c24fb7_540.gif")
    .setColor("#FFB6C1")
    .addField('Information', info.join('\n'))
    .addField('My Socials', mysocials.join('\n'))
    .addField('Commands', commands.join('\n'));


  if(!helpArgs[0]) return message.channel.send(embed)




if(helpArgs[0] === 'owner') {
    let Owner = message.author;
    if(Owner.id !== "603269203511738420") return message.reply("you can't execute this command.")
    const embed = new MessageEmbed()
    .setDescription("**Owner Commands**\n\n``aa``\n``ca``\n``bw``\n``ctc``\n``dtc``\n``dmall``\n``unbanall``\n``dr``\n``mcr``\n")
    .setFooter("Searched by " + message.author.tag)

    return message.channel.send(embed)
}
  }
        }



module.exports = HelpCommand;
