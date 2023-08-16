const { CommandInteraction, Client, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: {
        name: 'dm',
        description: 'Send a direct message to a user.',
        options: [
            {
                name: 'user',
                description: 'The user you want to send a message to.',
                type: 'USER',
                required: true,
            },
            {
                name: 'message',
                description: 'The message you want to send.',
                type: 'STRING',
                required: true,
            },
        ],
    },

    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */

    run: async (client, interaction) => {
        const user = interaction.options.getUser('user');
        const messageContent = interaction.options.getString('message');

        if (!user || !messageContent) {
            return interaction.reply('Please provide a valid user and message.');
        }

        try {
            await user.send(messageContent);

            // Create a success response with a button to acknowledge the message was sent
            const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('dm_sent')
                        .setLabel('DM Sent')
                        .setStyle('SUCCESS')
                );

            await interaction.reply({
                content: `Successfully sent a direct message to ${user.tag}`,
                components: [row],
            });
        } catch (error) {
            console.error(`Error sending DM to ${user.tag}: ${error.message}`);
            interaction.reply(`An error occurred while sending a direct message to ${user.tag}`);
        }
    },
};
                  