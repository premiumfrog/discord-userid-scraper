const { Client, Intents } = require("discord.js-selfbot-v13");
const fs = require("fs");

const TOKEN = "YOUR_USER_TOKEN"; // replace with an ALT accounts token.
const GUILD_ID = "YOUR_GUILD_ID"; // Replace with the desired server id (the account must be in the server also called guild_id in this case)
const EXCLUDED_USER_ID = "YOUR_USER_ID"; // Put your accounts userid here if you don't want it included.

const client = new Client({
  checkUpdate: false,
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS],
});

client.once("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  console.log(
    "Hey just so you know. This is against discord TOS. I am not responsible for any damages, losses, or any punishments received. By using this software you are at your OWN risk."
  );

  const guild = await client.guilds.fetch(GUILD_ID);
  const members = await guild.members.fetch();

  const userIds = members
    .filter((member) => !member.user.bot && member.user.id !== EXCLUDED_USER_ID) // exclude bots and the your accounts userid
    .map((member) => member.user.id);
  console.log(userIds);

  fs.writeFileSync("userIds.txt", userIds.join("\n"));
  console.log("User IDs have been saved to userIds.txt");

  client.destroy();
});

client.login(TOKEN);
