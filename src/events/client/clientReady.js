const Discord = require('discord.js');
const chalk = require('chalk');
const { random } = require('mathjs');

module.exports = async (client) => {
    const startLogs = new Discord.WebhookClient({
        id: client.webhooks.startLogs.id,
        token: client.webhooks.startLogs.token,
    });

    console.log(`\u001b[0m`);
  console.log(`${require("chalk").blue.bold("Logged With")} -->> ${require("chalk").red.bold(client.user.tag)}`)
    console.log(chalk.blue(chalk.bold(`Systemmm`)), (chalk.white(`>>`)), chalk.red(`Shard #${client.shard.ids[0] + 1}`), chalk.green(`is ready!`))
    console.log(chalk.blue(chalk.bold(`godcraft Bot`)), (chalk.white(`>>`)), chalk.green(`online 🖥️`), chalk.red(`${client.guilds.cache.size}`), chalk.green(`servers!`))

  //console.log(chalk.blue.bold('Loading') + " " + chalk.yellow.bold(`"${file.name}"`))

    let embed = new Discord.EmbedBuilder()
        .setTitle(`🆙・Finishing shard`)
        .setDescription(`A shard just finished`)
        .addFields(
            { name: "🆔┆ID", value: `${client.shard.ids[0] + 1}/${client.options.shardCount}`, inline: true },
            { name: "📃┆State", value: `Ready`, inline: true },
        )
        .setColor(client.config.colors.normal)
    startLogs.send({
        username: 'Bot Logs',
        embeds: [embed],
    });

    setInterval(async function () {
        const promises = [
            client.shard.fetchClientValues('guilds.cache.size'),
        ];
        return Promise.all(promises)
            .then(results => {
                const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
                let statuttext;         if(process.env.DISCORD_STATUS) {
                    statuttext = process.env.DISCORD_STATUS.split(', ');
                } else {
                    statuttext = [
                        `・❗/help`,
                        `・💻┆.${totalGuilds} servers`,
                        `★🔗┆discord.gg/Godcraft★`,
                      `»»¡┆ 2342 total users`,
                        `・🏷️┆Version ${require(`${process.cwd()}/package.json`).version}`
                    ];
                }
                const randomText = statuttext[Math.floor(Math.random() * statuttext.length)];
                client.user.setActivity('activity', { type: Discord.ActivityType.Streaming });
                client.user.setPresence({ activities: [{ name: randomText }], status: 'online' });
            })
    }, 50000)

    client.player.init(client.user.id);
  // Check if is up to date
const { version } = require(process.cwd() + '/package.json');
require("axios").get('https://api.github.com/repos/CorwinDev/Discord-Bot/releases/latest').then(res => {
  if (res.data.tag_name !== version) {
    console.log(chalk.red.bgYellow(`Your bot is not up to date! Please update to the latest version!`, version + ' -> ' + res.data.tag_name));
  }
}).catch(err => {
  console.log(chalk.red.bgYellow(`Failed to check if bot is up to date!`));
});
}
