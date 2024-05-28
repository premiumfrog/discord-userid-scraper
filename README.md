# Discord User ID Scraper

A simple script to fetch and save user IDs from a Discord server using an alternate account. **Note:** This script uses a self-bot and violates Discord's Terms of Service. Use at your own risk.

*Requires Node.js*

## Usage

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/discord-userid-scraper.git
   cd discord-userid-scraper
   ```
2. Install dependencies:
    ```sh
    npm install dotenv discord.js-selfbot-v13
    ```
3. Update index.js with your credentials:
  ```js
    const TOKEN = "YOUR_USER_TOKEN"; // replace with an ALT accounts token.
    const GUILD_ID = "YOUR_GUILD_ID"; // Replace with the desired server id (the account must be in the server also called guild_id in this case)
    const EXCLUDED_USER_ID = "YOUR_USER_ID"; // Put your accounts userid here if you don't want it included.
  ```
4. Run index.js
    ```sh
    node index.js
    ```
# Disclaimer
This script is against Discord's Terms of Service. I am not responsible for any damages, losses, or any punishments received. By using this software, you are doing so at your own risk.

License
This project is licensed under the MIT License - see the LICENSE file for details.
