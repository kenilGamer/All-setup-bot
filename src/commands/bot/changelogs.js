const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: "📃・Changelogs",
        desc: `_____`,
        thumbnail: client.user.avatarURL({ size: 2048 }),
        fields: [{
            name: "📃┆Changelogs",
                value: '15/8/2023- Updated the bot to the latest version of discord.js (v14)'
          'Godcraft bot update,Update api maximum bug fix,Add new commands,all music error fix,bot and website add,website link:- https://godcrafts.fun',
                inline: true,
            },
        ],
        type: 'editreply'
    }, interaction)
}

 