const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const perms = await client.checkPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageChannels],
        perms: [Discord.PermissionsBitField.Flags.ManageChannels]
    }, interaction);

    if (perms == true) return;

    interaction.channel.clone().then((channel) => {
        channel.setPosition(interaction.channel.position).then(
            interaction.channel.delete()
        );

        client.embed({
            title: `Channel Nuked by **${interaction.user.tag}**`,
            image: `https://i.imgur.com/Da7ScU4.gif`
        }, channel)
    })
}

/**  
const { Permissions, MessageActionRow, MessageButton } = require('discord.js');

module.exports = async (client, interaction, args) => {
    const member = interaction.member;
    if (!member) return;

    // Check if the user has the Manage Channels permission
    if (!member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) {
        return interaction.reply({
            content: "You don't have the necessary permissions to perform this action.",
            ephemeral: true
        });
    }

    // Create a confirmation button
    const confirmationButton = new MessageButton()
        .setCustomId('confirm')
        .setLabel('Confirm')
        .setStyle('PRIMARY');

    // Create an action row with the confirmation button
    const row = new MessageActionRow().addComponents(confirmationButton);

    // Reply with a confirmation message and button
    await interaction.reply({
        content: 'Are you sure you want to nuke this channel? This action is irreversible!',
        components: [row],
        ephemeral: true
    });

    // Collect button interactions
    const collector = interaction.channel.createMessageComponentCollector({
        time: 15000,
        filter: (i) => i.customId === 'confirm' && i.user.id === interaction.user.id
    });

    collector.on('collect', async () => {
        // Clone the channel and delete the original
        const channel = await interaction.channel.clone();
        await interaction.channel.delete();

        // Send a confirmation embed in the new channel
        const confirmationEmbed = new Discord.MessageEmbed()
            .setTitle(`Channel Nuked by ${interaction.user.tag}`)
            .setImage('https://i.imgur.com/Da7ScU4.gif');

        await channel.send({ embeds: [confirmationEmbed] });

        // Send a reply to the interaction
        await interaction.followUp('Channel nuked successfully!');
    });

    collector.on('end', () => {
        // Remove the confirmation button after the collector ends
        row.components = [];
        interaction.editReply({ components: [row] });
    });
}; */