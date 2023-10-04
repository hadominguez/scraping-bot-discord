# Scraping Bot Discord - Nike Jordan Edition

This Discord bot is designed to keep you updated on the latest Nike Jordan sneakers directly from the official Nike website. Leveraging the Cheerio library for web scraping, it extracts crucial details such as the product name, promotional message, price, and the direct link to the product.

## Installation

1. Clone this repository:

```bash
git clone https://github.com/hadominguez/scraping-bot-discord.git
```

2. Install dependencies:

```bash
npm install
```

3. Configure your Discord token in the `config.js` file:

```javascript
const token= 'YOUR_DISCORD_TOKEN';
// Other configurations
```

4. Run the bot:

```bash
node index.js
```

## Commands

The bot responds to the following commands:

- `!!jordan`: Displays a list of the latest Nike Jordan sneakers.

## Usage

Once the bot is running, simply type `!!jordan` in the Discord channel where the bot is active. The bot will perform web scraping on the Nike official website and return updated information on Nike Jordan sneakers.

## Contributions

Contributions are welcome. If you encounter a problem or have an improvement, please create an issue or a pull request.

## Notes

- This bot performs web scraping on the official Nike website. Ensure compliance with Nike's terms of service to avoid legal issues.

- The Cheerio library is used for web scraping. Make sure to understand and comply with the terms of service of the website you are accessing.

- This project is for educational purposes only and should not be used to collect information unethically or illegally.

