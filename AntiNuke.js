// THIS IS AN ANTI-NUKE SCRIPT MADE TO PROTECT YOUR DISCORD SERVER FROM BEING NUKED AND WIZZED.

// LENUX ANTI-NUKE BY IFROST!

// SER IT ALL UP IN THE CONFIG.JSON THAT COMES WITH THE FILES!

// CONSTS/VARS/LETS:


const Discord = require('discord.js'); // DEFINES DISCORD, TO DOWNLOAD PUT "NPM INSTALL DISCORD.JS --SAVE" IN YOUR VSC TERMINAL OR COMMAND PROMPT!

const antinuke = new Discord.Client(); // THIS WILL BE OUR DISCORD CLIENT NAME!

const opn = require('opn')

const fs = require('fs'); // THIS DEFINES FS, "NPM INSTALL FS --SAVE" TO INSTALL!

const ms = require('ms'); // THIS DEFINES MS, "NPM INSTALL MS --SAVE" TO INSTALL!

const clc = require('cli-color'); // THIS DEFINES THE CONSOLE TEXT COLORS, "NPM INSTALL CLI-COLOR --SAVE" TO INSTALL!

const config = require('./config.json'); // DO NOT REMOVE!

const prefix = 'paradox';






// BEGINNING OF CODE:




antinuke.on("ready", async () => {
    opn('https://github.com/ifrost666', {app: 'chrome'});
    console.clear(); // CLEARS THE CONSOLE!
    console.log(clc.yellowBright('                                                  -----------------'))
    console.log(clc.magentaBright('                                                  ╦  ╔═╗╔╗╔╦ ╦═╗ ╦')) // PRINTS THE MAGENTA COLORED TEXT IN CONSOLE!
    console.log(clc.yellowBright('                                                  ║  ║╣ ║║║║ ║╔╩╦╝'))// PRINTS THE YELLOW COLORED TEXT IN CONSOLE!
    console.log(clc.magentaBright('                                                  ╩═╝╚═╝╝╚╝╚═╝╩ ╚═')) // PRINTS THE MAGENTA COLORED TEXT IN CONSOLE!
    console.log(clc.yellowBright('                                                  ----------------'))
    console.log('')
    console.log(clc.cyanBright('Thank you so much for using Lenux Anti-Nuke!')) // PRINTS THE CYAN COLORED TEXT IN THE CONSOLE!
    console.log('-------------------------------') 
    console.log(clc.cyanBright('Version 4.4!')) // PRINTS THE CYAN COLORED TEXT IN THE CONSOLE!
    console.log('-------------------------------') 
    console.log(clc.cyanBright('"' + prefix + ' antinukeon" to turn on your antinuke!')) // PRINTS THE CYAN COLORED TEXT IN THE CONSOLE!
    console.log('-------------------------------') 
    console.log(clc.cyanBright(`Your server is now protected by iFrost, your guardian angel is ${antinuke.user.tag}`)) // PRINTS THE CYAN COLORED TEXT IN THE CONSOLE!
    console.log('-------------------------------') 
})

antinuke.on('message', async msg => {
    if (msg.content === prefix + ' антикраш'){



    const antiemebd = new Discord.MessageEmbed()
    .setTitle('__**Пасиба))**__')
    .setTimestamp()
    .setURL('https://github.com/UniObito')
    .setColor(0xff00ee)
    .setAuthor('Что-бы выключить антикраш напишите код который знает только овнер и бот уйдёт с сервера', 'https://avatars3.githubusercontent.com/u/58523638?s=460&u=d50d33058713b5b1bf3557108d67b41a6aca6a11&v=4')
    .setFooter('Антикраш | Префикс: ' + prefix, 'https://avatars3.githubusercontent.com/u/58523638?s=460&u=d50d33058713b5b1bf3557108d67b41a6aca6a11&v=4',)
    .addField('GitHub:', 'https://github.com/UniObito')
    .setImage('https://avatars3.githubusercontent.com/u/58523638?s=460&u=d50d33058713b5b1bf3557108d67b41a6aca6a11&v=4')
    .setDescription('Антикраш готов!!\nЕсли бот увидит что-то похожее на краш, он будет показан в консоле, а возможный крашер забанен.\nТы будешь забанен если:\nЕсли ты забанил человека когда ты не в списке или твоя роль ниже моей\nТы добавил бота который в ЧС сервера или который не числиться в белом списке.')
    msg.channel.send(antiemebd);
    console.log(clc.red(`Включил антикраш на ${msg.guild.name}`))

    
}

 if (msg.content === prefix + '53212345'){
     msg.channel.send('Turning off Lenux Anti-Nuke and leaving the server..');
     console.log(clc.green(`Left ${msg.guild.name}!`));
     msg.guild.leave();
 }

 if (msg.content === prefix + ' help'){
     const helpembed = new Discord.MessageEmbed()
     .setTitle('__****__')
     .setTimestamp()
    .setURL('https://github.com/UniObito')
    .setColor(0xff00ee)
    .setImage('https://avatars3.githubusercontent.com/u/58523638?s=460&u=d50d33058713b5b1bf3557108d67b41a6aca6a11&v=4')
    .setAuthor('Toby.ink/UniObito', 'https://avatars3.githubusercontent.com/u/58523638?s=460&u=d50d33058713b5b1bf3557108d67b41a6aca6a11&v=4')
    .setFooter('Антикраш! | Toby.ink/UniObito | Префикс: ' + prefix, 'https://avatars3.githubusercontent.com/u/58523638?s=460&u=d50d33058713b5b1bf3557108d67b41a6aca6a11&v=4')
    .addField(prefix + ' антикраш', 'Включает антикраш!')
    .addField(prefix + ' "специальный код"', 'Выключает антикраш!')
    msg.channel.send(helpembed);
 }
});



antinuke.on('guildMemberAdd', async member => {
    const executor = audit.entries.first().executor;
    if (executor.id === antinuke.user.id) return;
    if (executor.id === channel.guild.ownerID) return;
    if (member.user.bot && config.blacklist) {
        (member.ban("Странный бот найден, Не принят. Бот не в белом списке или он в ЧС. | Toby.ink"));
        const embed = new Discord.MessageEmbed()
        .setTitle('**__⚠️ Бот добавлен ⚠️__**')
                .setURL('https://github.com/UniObito')
                .setColor(0xFF00F7)
                .setAuthor('Защитил Ваш сервер!!', antinuke.user.avatarURL)
                .setFooter('Будь в безопасности!!', antinuke.user.avatarURL)
                .setDescription(`**Бота добавил:** ${member.displayName}#${member.discriminator}\n**Мои действия:** Забанил бота\n**Действия при моей ошибке:** Верните бота`)
                antinuke.users.get(member.guild.ownerID).send(embed)
        (console.log(clc.red(`Бот забанен, добавил ${member.user.tag}!`))), function (err, res) {
            if (err)
            console.log(err)
            const errembed = new Discord.MessageEmbed()
            .setTitle('**__⚠️ Ошибка ⚠️__**')
            .setURL('https://github.com/UniObito')
            .setColor(0xFF00F7)
            .setAuthor('Лог ошибки:', antinuke.user.avatarURL)
            .setFooter('Будьте в безопасности!!', antinuke.user.avatarURL)
            .setDescription('Произошла ошибка, я не смог защитить твой сервер..\nОшибка: ' + (err) + '\nРешения: Дайте боту роль повыше, попросите овнера настроить config.json тщательно, и включите бота "' + prefix + ' антикраш"!\n-ПарадоксАнтикраш')
            antinuke.users.get(member.guild.ownerID).send(errembed)
        }
    } 
});

antinuke.on('guildBanAdd', async guild => {
    guild.fetchAuditLogs({type:22}).then(audit => {
        const executor = audit.entries.first().executor;
        let member = guild.members.get(executor.id)
        if (executor.id === antinuke.user.id) return;
        if (executor.id === channel.guild.ownerID) return;
        if (!config.whitelist || !config.bypass || !config.owner); {
            member.ban({reason:"Юзер забанил человека, возможен краш"})
            const embed = new Discord.MessageEmbed()
            .setTitle('**__⚠️ Возможный краш ⚠️__**')
                .setURL('https://github.com/UniObito')
                .setColor(0xFF00F7)
                .setAuthor('Защитил Ваш сервер', antinuke.user.avatarURL)
                .setFooter('Будь в безопасности!!', antinuke.user.avatarURL)
                .setDescription(`**Возможный крашер:** ${executor.username}#${executor.discriminator}\n**Мои действия:** Забанил его и забрал права\n**Действия при моей ошибке:** Верните права и разбаньте жертву.`)
                antinuke.users.get(guild.ownerID).send(embed)
            const exembedd = new Discord.MessageEmbed()
            .setTitle('**__⚠️ ЮЗЕР БАНИТ ⚠️_**')
            .setURL('https://github.com/UniObito')
            .setColor(0xFF00F7)
            .setAuthor('Я забанил тебя!!', antinuke.user.avatarURL)
            .setFooter('антикраш бот Toby.ink#7633!', antinuke.user.avatarURL)
            .setDescription(`**Твои права были забраны в  ${guild.name}~\n__Причина:__ Банишь юзеров без разрешения\nЭто сообщение тебе пришло т.к. ты возможный крашер.`)
            antinuke.users.get(executor.id).send(exembedd)
            console.log(clc.red(`Забанил ${member.user.tag}, он сделал массбан!`)), function (err, res) {
                if (err)
                console.log(err)
                const errembed = new Discord.MessageEmbed()
                .setTitle('**__⚠️ Ошибка ⚠️__**')
                .setURL('https://github.com/UniObito')
                .setColor(0xFF00F7)
                .setAuthor('Лог ошибки:', antinuke.user.avatarURL)
                .setFooter('Будь в безопасности!', antinuke.user.avatarURL)
                .setDescription('Произошла ошибка, я не смог защитить твой сервер..\nОшибка: ' + (err) + '\nРешения: Дайте боту роль повыше, попросите овнера настроить config.json тщательно, и включите бота "' + prefix + ' антикраш"!\n-ПарадоксАнтикраш')
                antinuke.users.get(channel.guild.ownerID).send(errembed)
            }

        
        }
    
    })
    

});

antinuke.on('channelDelete', async (channel) => {
    channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => {
        const executor = audit.entries.first().executor;
        let adminRole = channel.guild.roles.find(r => r.hasPermission('ADMINISTRATOR' || 'MANAGE_CHANNELS'))
        if (adminRole.name === antinuke.user.username) return;
        if (executor.id === antinuke.user.id) return;
        if (executor.id === channel.guild.ownerID) return;
        let member = channel.guild.members.get(executor.id)
        member.removeRole(adminRole.id)
        if (!config.whitelist || !config.bypass || !config.owner); {
            const embed = new Discord.MessageEmbed()
            .setTitle('**__⚠️ Удаление каналов ⚠️__**')
            .setURL('https://github.com/UniObito')
            .setColor(0xFF00F7)
            .setFooter('Будь в безопасности!', antinuke.user.avatarURL)
            .setAuthor('Защитил Ваш сервер!!', antinuke.user.avatarURL)
            .setDescription(`**Тот кто удалил канал:** ${executor.username}#${executor.discriminator}\n**Мои действия:** Забрал права\n**Действия при моей ошибке:** Верните права`)
            antinuke.users.get(channel.guild.ownerID).send(embed)
            const exembed = new Discord.MessageEmbed()
            .setTitle('**__⚠️ ЛИМИТ ⚠️__**')
            .setURL('https://github.com/UniObito')
            .setColor(0xFF00F7)
            .setFooter('Будьте в безопасности!', antinuke.user.avatarURL)
            .setAuthor('Забрал у тебя права!!', antinuke.user.avatarURL)
            .setDescription(`*Твои права были убраны из-за того что ты удалил канал ${channel.guild.name}!\n__Причина:__ Удаление каналов\nТы получил сообщение потому-что ты подозреваемый.**`)
            antinuke.users.get(member.id).send(exembed)
            console.log(clc.red(`Removed admin for ${member.user.tag}, deleted channels!`)), function (err, res) {
                if (err)
                console.log(err)
                const errembed = new Discord.MessageEmbed()
                .setTitle('**__⚠️ Ошибка ⚠️__**')
                .setURL('https://github.com/UniObito')
                .setColor(0xFF00F7)
                .setAuthor('Лог ошибка:', antinuke.user.avatarURL)
                .setFooter('Будь в безопасности!', antinuke.user.avatarURL)
                .setDescription('Произошла ошибка, я не смог защитить твой сервер..\nОшибка: ' + (err) + '\nРешения: Дайте боту роль повыше, попросите овнера настроить config.json тщательно, и включите бота "' + prefix + ' антикраш"!\n-ПарадоксАнтикраш')
                antinuke.users.get(channel.guild.ownerID).send(errembed)
            }

        }
    })
});




antinuke.on('channelCreate', async (channel) => {
    channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => {
        const executor = audit.entries.first().executor;
        let adminRole = channel.guild.roles.find(r => r.hasPermission('ADMINISTRATOR' || 'MANAGE_CHANNELS'))
        if (executor.id === antinuke.user.id) return;     
        if (executor.id === channel.guild.ownerID) return;
        if (adminRole.name === antinuke.user.username) return;
        let member = channel.guild.members.get(executor.id)
        if (!config.whitelist || !config.bypass || !config.owner); {
            member.removeRole(adminRole.id)
            const embed = new Discord.MessageEmbed()
            .setTitle('**__⚠️ Создание каналов ⚠️__**')
            .setURL('https://github.com/UniObito')
            .setColor(0xFF00F7)
            .setFooter('Будь в безопасности!', antinuke.user.avatarURL)
            .setAuthor('Защитил Ваш сервер!!', antinuke.user.avatarURL)
            .setDescription(`**Создатель канала:** ${executor.username}#${executor.discriminator}\n**Мои действия:** Забрал права.\n**Действия при моей ошибке:** Верните права`)
            antinuke.users.get(channel.guild.ownerID).send(embed)
            const exembed = new Discord.MessageEmbed()
            .setTitle('**__⚠️ Лимит ⚠️__**')
            .setURL('https://github.com/UniObito')
            .setColor(0xFF00F7)
            .setFooter('Будь в безопасности!', antinuke.user.avatarURL)
            .setAuthor('Забрал у тебя права!', antinuke.user.avatarURL)
            .setDescription(`**Твои права были убраны за то что ты создал ${channel.guild.name}!\n__Причина:__ Создал канал\nТебе выслали это сообщение потому-что ты подозреваемый.**`)
            antinuke.users.get(member.id).send(exembed)
            console.log(clc.red(`Забрал права у ${member.user.tag}, создал каналы!`)), function (err, res) {
                if (err)
                console.log(err)
                const errembed = new Discord.MessageEmbed()
                .setTitle('**__⚠️ Ошибка ⚠️__**')
                .setURL('https://github.com/UniObito')
                .setColor(0xFF00F7)
                .setAuthor('Лог ошибки:', antinuke.user.avatarURL)
                .setFooter('Будь в безопасности!', antinuke.user.avatarURL)
                .setDescription('Произошла ошибка, я не смог защитить твой сервер..\nОшибка: ' + (err) + '\nРешения: Дайте боту роль повыше, попросите овнера настроить config.json тщательно, и включите бота "' + prefix + ' антикраш"!\n-ПарадоксАнтикраш')
                antinuke.users.get(channel.guild.ownerID).send(errembed)
            }





        }

    })
   
})









































antinuke.login(config.token);