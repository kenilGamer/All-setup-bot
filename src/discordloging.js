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
      client_id: '1071727012810604595',
      client_secret: '2Og-N2nzgOMc1LHO2Xv2PFyBxYUq4YwG',
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
