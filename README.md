# All-setup-bot
- 👋 Hi, I’m @kenilGamer
- 👀 I’m interested in ...
- 🌱 I’m currently learning ...
- 💞️ I’m looking to collaborate on ...
- 📫 How to reach me ...

<!---
kenilGamer/kenilGamer is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
Contact
Any bug or suggestion !
 - Contact With Me Discord: [`kenilgamer`](https://discord.gg/5Fqwh3u8xB)
Server Support



## code share by kenilgamer
##


run for replit code [`click me`](https://replit.com/@KenilGamers/ALL-IN-ONE)
This is ALL IN ONE Discord Bot. All the credits goes to the respective owners, i don't meant to own it.
```env
DISCORD_TOKEN=
MONGO_TOKEN=
WEBHOOK_ID=
WEBHOOK_TOKEN=
DISCORD_ID=
OWNER_ID=



# Not neccessary variables
DISCORD_STATUS="Listening to meself, I'm a stupid bot"
RADIO=
TOPGG_TOKEN=
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
LAVALINK_HOST=lava.link
LAVALINK_PASSWORD=I'm a secret
LAVALINK_PORT=80
GIPHY_TOKEN=
OPENAI=
```
<img src="https://media.discordapp.net/attachments/1085835107866267658/1142001333356998757/Screenshot_2023-08-18-13-15-02-71_572064f74bd5f9fa804b05334aa4f912.jpg" height="340">
loging system soon...

```js

const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 4000; // Choose a port number

app.get('/', async (req, res) => {
  // Your code for handling the callback


  // Redirect the user to Discord's OAuth2 authorization page
  const redirectUri = encodeURIComponent('http://localhost:4000/callback');
  const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=1071727012810604595&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fcallback&response_type=code&scope=identify%20email`;
  res.redirect(discordAuthUrl);
});

app.get('/callback', async (req, res) => {
  const code = req.query.code;

  // Exchange the authorization code for an access token
  const tokenResponse = await axios.post('https://discord.com/api/oauth2/token', null, {
    params: {
      client_id: '',
      client_secret: '',
      code: code,
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:4000/callback'
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  const accessToken = tokenResponse.data.access_token;

  // Use the access token to fetch user information from Discord API
  const userResponse = await axios.get('https://discord.com/api/users/@me', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  const user = userResponse.data;

  // Here, you can customize the user authentication and session management
  // For simplicity, let's just display the user's information
  res.send(`Hello, ${user.username}#${user.discriminator}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```
**src/config/webhooks.json edit**
```json
{
    "startLogs": {
        "id": "1132216763443073084",
        "token":"4UopKqKFJpe-wQ-SD_LZKZdbmjg2aXVjveZZD1za4UmNebMdxgJVVmEWeJiwYaF9dX_e"
    },
    "shardLogs": {
        "id": "1132216763443073084",
        "token": "4UopKqKFJpe-wQ-SD_LZKZdbmjg2aXVjveZZD1za4UmNebMdxgJVVmEWeJiwYaF9dX_e"
    },
    "errorLogs": {
        "id": "1132216763443073084",
        "token": "4UopKqKFJpe-wQ-SD_LZKZdbmjg2aXVjveZZD1za4UmNebMdxgJVVmEWeJiwYaF9dX_e"
    },
    "dmLogs": {
        "id": "1132216763443073084",
        "token": "4UopKqKFJpe-wQ-SD_LZKZdbmjg2aXVjveZZD1za4UmNebMdxgJVVmEWeJiwYaF9dX_e"
    },
    "voiceLogs": {
        "id": "1132216763443073084",
        "token": "4UopKqKFJpe-wQ-SD_LZKZdbmjg2aXVjveZZD1za4UmNebMdxgJVVmEWeJiwYaF9dX_e"
    },
    "serverLogs": {
        "id": "1132216763443073084",
        "token": "4UopKqKFJpe-wQ-SD_LZKZdbmjg2aXVjveZZD1za4UmNebMdxgJVVmEWeJiwYaF9dX_e"
    },
    "serverLogs2": {
        "id": "1132216763443073084",
        "token":"4UopKqKFJpe-wQ-SD_LZKZdbmjg2aXVjveZZD1za4UmNebMdxgJVVmEWeJiwYaF9dX_e"
    },
    "commandLogs": {
        "id": "1132216763443073084",
        "token": "4UopKqKFJpe-wQ-SD_LZKZdbmjg2aXVjveZZD1za4UmNebMdxgJVVmEWeJiwYaF9dX_e"
    },
    "consoleLogs": {
        "id": "1132216763443073084",
        "token": "4UopKqKFJpe-wQ-SD_LZKZdbmjg2aXVjveZZD1za4UmNebMdxgJVVmEWeJiwYaF9dX_e"
    },
    "warnLogs": {
        "id": "1132216763443073084",
        "token": "4UopKqKFJpe-wQ-SD_LZKZdbmjg2aXVjveZZD1za4UmNebMdxgJVVmEWeJiwYaF9dX_e"
    },
    "voiceErrorLogs": {
        "id": "1132216763443073084",
        "token": "4UopKqKFJpe-wQ-SD_LZKZdbmjg2aXVjveZZD1za4UmNebMdxgJVVmEWeJiwYaF9dX_e"
    },
    "creditLogs": {
        "id": "1132216763443073084",
        "token": "4UopKqKFJpe-wQ-SD_LZKZdbmjg2aXVjveZZD1za4UmNebMdxgJVVmEWeJiwYaF9dX_e"
    },
    "evalLogs": {
        "id": "1132216763443073084",
        "token": "4UopKqKFJpe-wQ-SD_LZKZdbmjg2aXVjveZZD1za4UmNebMdxgJVVmEWeJiwYaF9dX_e"
    },
    "interactionLogs": {
        "id": "1132216763443073084",
        "token": "4UopKqKFJpe-wQ-SD_LZKZdbmjg2aXVjveZZD1za4UmNebMdxgJVVmEWeJiwYaF9dX_e"
    }
}
```
**src/config/bot.js**
```js

module.exports = {
    colors: {
        succes: '#57F287',
        error: "#ED4245",
        normal: "#5865F2"
    },

    discord: {
        id: "",
        prefix: '!',
        footer: ` 2023 - ${new Date().getFullYear()}`, 
        botInvite: ``,
        serverInvite: "",
    },
```
