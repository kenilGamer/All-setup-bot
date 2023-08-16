const { Client, Intents } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require('@discordjs/builders');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const commands = [
  new SlashCommandBuilder()
    .setName('new roll')
    .setDescription('Roll a dice')
    .addIntegerOption(option =>
      option.setName('sides')
        .setDescription('Number of sides on the dice')
        .setRequired(true)
    ),
  new SlashCommandBuilder()
    .setName('8ball')
    .setDescription('Ask the magic 8-ball a question')
    .addStringOption(option =>
      option.setName('question')
        .setDescription('The question you want to ask')
        .setRequired(true)
    ),
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env['DISCORD_ID']);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationCommands(process.env['CLIENT_ID']), // Replace with your bot's client ID
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName, options } = interaction;

  if (commandName === 'roll') {
    const sides = options.getInteger('sides');
    const result = Math.floor(Math.random() * sides) + 1;
    await interaction.reply(`You rolled a ${result} on a ${sides}-sided dice!`);
  } else if (commandName === '8ball') {
    const responses = [
      'It is certain.',
      'It is decidedly so.',
      // Add more responses here
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    await interaction.reply(randomResponse);
  }
  // Add more fun commands here
});

client.login(TOKEN);
