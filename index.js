import cheerio from 'cheerio';
import myFetch from './peticion.js';
import config from './config.js';
import Discord, { ActivityType, EmbedBuilder, GatewayIntentBits } from 'discord.js';

const client = new Discord.Client({disableMentions: "everone",
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ] });

//events
client.login(config.token);

client.on("ready", () =>{
    console.log(`Bot has started as : ${client.user.tag}`);
    client.user.setActivity("Testeando!",{ type: ActivityType.Playing });
});


client.on("messageCreate", async (message) => {
    if(message.author.bot){ return; }
    if(!message.guild) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift();

    if(command === "jordan"){
        let response = await myFetch.myFetch("https://www.nike.com/men");

        let html = await response.text();
        let $ = cheerio.load(html);
    
        let menu =$('#DesktopMenu-0-1-0 .pre-columns-container.ncss-row');
        let divMenu =menu.find('div')[1];
        let linkJordan =divMenu.childNodes[4].attribs.href;
    
        let responseJordanMen = await myFetch.myFetch(linkJordan);
        html = await responseJordanMen.text();
        $ = cheerio.load(html);
        let listItems =$(".results__body .product-grid__items");
        let items =listItems.find('.product-card.product-grid__card');
    
        let listado = [];
        items.each(function (i, elem) {

            listado[i] = {
                nombre: $(this).find(".product-card__title").text(),
                mensaje: $(this).find(".product-card__messaging.accent--color").text(),
                precio: $(this).find(".product-price.is--current-price.css-11s12ax").text(),
                link: $(this).find(".product-card__link-overlay").attr('href')
            };

            let embed = new EmbedBuilder();
            embed.setTitle(listado[i].nombre);
            embed.setDescription("Mensaje: " + listado[i].mensaje +
            "\n Precio: " + listado[i].precio +
            "\n Link: " + listado[i].link);
            embed.setColor(config.color);
            message.channel.send({embeds: [embed]});
        });
    }
    
});