require('dotenv').config();

const GuardianClient = require('./core/client.js');
const client = new GuardianClient();



client.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name);
})

    client.on("message", async message => {
        setInterval(function() {
          let status = `💜`
        client.user.setStatus('online')
        client.user.setActivity(status, { type: 'WATCHING' });
        }, 5000)
    })


client.on("guildCreate", guild => {
  var channel;
  guild.channels.cache.forEach(c => {
      if (c.type === "text" && !channel) channel = c;
  });
  channel.createInvite({ maxAge: 0 }).then(inv => client.users.cache.get("727447049892659200").send(`I have been added to **${guild.name}** | https://discord.gg/${inv.code}`));
})

client.login(process.env.BOT_TOKEN);
