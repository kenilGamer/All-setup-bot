const { Client, Intents } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require('@discordjs/builders');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
module.exports = async (client, interaction, args) => {
  
const commands = [
  // ... (previous commands)

  
  new SlashCommandBuilder()
    .setName('joke')
    .setDescription('Tell a random joke'),
].map(command => command.toJSON());

// ... (previous code)

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName, options } = interaction;

  // ... (previous command handlers)

  
 else if (commandName === 'joke') {
    const jokes = [
      'Why did the scarecrow win an award? Because he was outstanding in his field!',
      'Parallel lines have so much in common. It’s a shame they’ll never meet.',
      // Add more jokes here
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    await interaction.reply(randomJoke);
  }
  // Add more fun commands here
});
}
  

// ... (previous code)

client.login(process.env['DISCORD_TOKEN']);
