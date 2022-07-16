require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });
 
// const fetch = require('node-fetch');
 
 

const onMessageCreate = require('./actions/onMessageCreate');

// const prefix = '.';
//created a function in actions and exported the function and in callback function only write
//function without brackets callback automatically runs the pro
client.on("ready",message =>{
  console.log("Atharva's First Bot is Ready to GO!!");
  console.log(`Logged in as ${client.user.tag}!`);
} );
        

client.on("messageCreate",onMessageCreate);


client.login(process.env.TOKENID);