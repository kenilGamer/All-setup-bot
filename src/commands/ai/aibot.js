require('dotenv').config();
const { Client, MessageEmbed } = require('discord.js');
const axios = require('axios');

const client = new Client();

client.on('ready', () => {
    console.clear();
    console.log(`${client.user.tag} is online!`);
});

client.on('message', async (message) => {
    if (!message.guild || message.author.bot) return;

    if (message.content.toLowerCase() === 'bye') {
        message.channel.send('Goodbye!');
        return;
    }

    try {
        const response = await getAIResponse(message.content);
        message.channel.send(response);
    } catch (error) {
        sendErrorMessage('Bot error, please try again!', message.channel);
    }
});

async function getAIResponse(input) {
    const openaiApiKey = process.env.OPENAI_API_KEY;
    const prompt = `User: ${input}\nAI:`;

    const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-003/completions',
        {
            prompt: prompt,
            max_tokens: 50
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${openaiApiKey}`
            }
        }
    );

    return response.data.choices[0].text.trim();
}

function sendErrorMessage(text, channel) {
    const embed = new MessageEmbed()
        .setColor('#FF7676')
        .setDescription(`**❌ | ${text} **`);
    
    channel.send(embed);
}

client.login(process.env.DISCORD_TOKEN);
  