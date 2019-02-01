// Load up the discord.js library
const Discord = require("discord.js");


// We also load the rest of the things we need in this file:
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token
const token = require("./config.json").token;
// config.token contains the bot's token
// config.prefix contains the message prefix.

//Constant file directories
const eventDir = "./events/"
const commandsDir = './commands/'


//Init function
const init = async ()=>{

    //Grab the event handlers
    const events = await readdir(eventDir);
    console.log(`Loading ${events.length} events...`)
    events.forEach(event =>{
        //Grab the event name
        const eventName = event.split('.')[0]
        console.log(`Loading event ${eventName}...`)
        //Require each event
        const newEvent = require(eventDir+event)
        //Bind each event on eventName
        client.on(eventName, newEvent.bind(null,client))
    })
    console.log("Finished loading events!")
    


    //Log into the client
    client.login(token);
}

init()