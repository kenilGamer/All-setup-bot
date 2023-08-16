const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `💻・Owner information`,
        desc: `____________________________`,
        
        fields: [{
            name: "👑┆Owner name",
            value: `kenilgamer`,
            inline: true,
        },
                 {
            name: "👑┆co-Owner name",
            value: `GOD0007`,
            inline: true,
        },
                 {
            name: "🇮🇳🇮🇳🇮🇳",
            value: `GUJARAT`,
            inline: true,
                 };
        {
            name: "🏷┆Discord tag",
            value: `KENILGAMER#0001`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `Godcraft`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `https://godcrafts.fun`,
            inline: true,
        },
                {
            name: "▶️┆YouTube",
            value: `https://youtube.com/@kenilgamer3035`,
            inline: true,
            },
                 {
            name: "🌐┆panel",
            value: `https://panel.godcrafts.fun`,
            inline: true,
                 }
  ],
        type: 'editreply'
    }, interaction)
}

/* const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Corwin`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `</Corwin>#0001`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `CoreWare`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[https://corwindev.nl](https://corwindev.nl)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 */