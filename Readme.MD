# A simple Discord Bot schema

# Getting Started
  <p>Download this repo and run <b>npm install</b></p>
    <p><i>  If you have not created a bot application please do so here: https://discordapp.com/developers/applications/</i></p>
  <p>Open up config.json and fill in your bot token</p>
  <p>Start the bot by using the command <b>node run bot</b></p>

# Adding commands
  <p>To add more commands simply create a new file with the command trigger word within the commands folder and fill in the following basic template</p>
  <code>
  exports.run = async(client,message,args) =>{
    //Code goes here
  }
  </code>
