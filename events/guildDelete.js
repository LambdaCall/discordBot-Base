

module.exports = async (client,guild) =>{
    // This event will run if the bot starts, and logs in, successfully.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
  
}