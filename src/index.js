import { config } from 'dotenv'
import { Client, GatewayIntentBits } from 'discord.js';
import { REST, Routes } from 'discord.js';
import fetch from "node-fetch";

config()

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,

    ]
});
var url="https://pow-ideas.fueler.in/api/pow-idea";    
    const response=await fetch(url);
    const allIdeas = await response.json();

const devIdeas = allIdeas.filter( element => element.pow_category =="Development")

const designIdeas = allIdeas.filter( element => element.pow_category =="Design")

const copywritingIdeas = allIdeas.filter( element => element.pow_category =="Copywriting")

const marketingIdeas = allIdeas.filter( element => element.pow_category =="Marketing")

const communityIdeas = allIdeas.filter( element => element.pow_category =="Community")

const writingIdeas =  allIdeas.filter( element => element.pow_category =="Writing")

function randomDev() {
    let random = devIdeas[Math.floor(Math.random() * devIdeas.length)];
    const ideaForward = `“**${random.pow_idea}.**”`;
    return ideaForward;
  }

  function randomDesign() {
    let random = designIdeas[Math.floor(Math.random() * designIdeas.length)];
    const ideaForward = `“**${random.pow_idea}.**”`;
    return ideaForward;
  }

  function randomCopy() {
    let random = copywritingIdeas[Math.floor(Math.random() * copywritingIdeas.length)];
    const ideaForward = `“**${random.pow_idea}.**”`;
    return ideaForward;
  }

  function randomMarketing() {
    let random = marketingIdeas[Math.floor(Math.random() * marketingIdeas.length)];
    const ideaForward = `“**${random.pow_idea}.**”`;
    return ideaForward;
  }
  function randomCommunity() {
    let random = communityIdeas[Math.floor(Math.random() * communityIdeas.length)];
    const ideaForward = `“**${random.pow_idea}.**”`;
    return ideaForward;
  }
  function randomWriting() {
    let random = writingIdeas[Math.floor(Math.random() * writingIdeas.length)];
    const ideaForward = `“**${random.pow_idea}.**”`;
    return ideaForward;
  }


const TOKEN = process.env.POW_BOT_TOKEN
const CLIENT_ID = process.env.POW_CLIENT_ID;
const GUILD_ID = process.env.POW_GUILD_ID;
client.login(TOKEN);

const rest = new REST({ version: '10' }).setToken(TOKEN);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('messageCreate', (message) => {
    if (message.content === 'ratul-ko-maaro') {
        message.reply('lol kya samjha mereko');
    }
    else if(message.content === '!ping'){
        message.reply('pong');
    }
})

client.on('interactionCreate', (interaction) => {
    if (interaction.options.getString('type')=== 'development') {

        interaction.reply({content: `You asked for a proof of work idea in ${interaction.options.getString('type')}`+ '\n **Here is a proof of work idea for you in Development :)**\n\n'+ randomDev()});

    }
    else if (interaction.options.getString('type')=== 'design') {
            
            interaction.reply({content: `You asked for a proof of work idea in ${interaction.options.getString('type')}`+ '\n **Here is a proof of work idea for you in Design :)**\n\n'+ randomDesign()});
    
        }
    else if (interaction.options.getString('type')=== 'copywriting') {
        interaction.reply({content: `You asked for a proof of work idea in ${interaction.options.getString('type')}`+ '\n **Here is a proof of work idea for you in Copywriting :)**\n\n'+ randomCopy()});
    }
    else if (interaction.options.getString('type')=== 'marketing') {
        interaction.reply({content: `You asked for a proof of work idea in ${interaction.options.getString('type')}`+ '\n **Here is a proof of work idea for you in Marketing :)**\n\n'+ randomMarketing()});
    }
    else if (interaction.options.getString('type')=== 'community') {
        interaction.reply({content: `You asked for a proof of work idea in ${interaction.options.getString('type')}`+ '\n **Here is a proof of work idea for you in Community :)**\n\n'+ randomCommunity()});
    }
    else if (interaction.options.getString('type')=== 'writing') {
        interaction.reply({content: `You asked for a proof of work idea in ${interaction.options.getString('type')}`+ '\n **Here is a proof of work idea for you in Writing :)**\n\n'+ randomWriting()});
    }
    else if (interaction.options.getString('type')=== 'all') {
        interaction.reply({content: `You asked for a proof of work idea in ${interaction.options.getString('type')}`+ '\n **Here is a proof of work idea for you in all domains :)**\n\n'+ "***In Development \n***"+randomDev()+'\n\n'+ "***In Design \n***"+ randomDesign()+'\n\n'+ "***In Copywriting \n***"+randomCopy()+'\n\n'+"***In Marketing \n***"+ randomMarketing()+'\n\n'+"***In Community \n***"+ randomCommunity()+'\n\n'+"***In Writing \n***"+ randomWriting()});
    }
    else if(interaction.options.getString('type')=== 'help'){
        interaction.reply({content: `This bot was made with love from https://fueler.io/`+ '\n **Here is a list of commands you can use**\n\n'+ "***- development ***\n"+ "***- design ***\n"+ "***- copywriting ***\n"+ "***- marketing ***\n"+ "***- community ***\n"+ "***- writing ***\n"+ "***- all ***\n"});
    }
})

async function main() {
    const commands =[
        {
            name: 'proof-of-work',
            description: 'Command to get new proof of work ideas in the chat',
            options : [
                {
                    name: 'type',
                    description: 'Get proof of work ideas for a specific type',
                    type: 3,
                    required: true,
                    "choices": [
                        {
                            "name": "help",
                            "value": "help"                            
                        },
                        {
                            "name": "development",
                            "value": "development"
                        },
                        {
                            "name": "design",
                            "value": "design"
                        },
                        {
                            "name": "copywriting",
                            "value": "copywriting"
                        },
                        {
                            "name": "marketing",
                            "value": "marketing"
                        },
                        {
                            "name": "community",
                            "value": "community"
                        },
                        {
                            "name": "writing",
                            "value": "writing"
                        },
                        {
                            "name": "all",
                            "value": "all"
                        }
                    ]
                }
            
            ]
        }
];

    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { 
            body: commands
        })
    } catch (error) { console.log(err) }
}
main();