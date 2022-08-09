import { config } from 'dotenv'
import { Client, GatewayIntentBits } from 'discord.js';
import { REST, Routes } from 'discord.js';

config()

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,

    ]
});

const devIdeas = [
    {"idea": "Pick a web page design from http://dopeui.co and convert the design to code"},
    {"idea": "A website that suggest who to follow on Twitter based on different domains"},
    {"idea": "A website that helps people generate CSS code for Glassmorphism design"},
    {"idea": "Develop a website to tribute Elon Musk by showcasing all the projects he has worked on"},
    {"idea": "Build a website to showcase all the best development blogs on the internet"},
    {"idea": "Develop a website that helps people generates screenshots of a website"},
]

const designIdeas = [
    {"idea": "Designed a logo for a brand or a fun projects? It's your proof of work as a designer."},
    {"idea": "Design a personal website for your favourite artist by presenting their brand value"},
    {"idea": "Search for an upcoming Twitter space, come up with a visual presentation of that space"},
    {"idea": "Write a blog on 10 communities to join as an aspiring writer"},
    {"idea": "Worked on a website UI design? Count them as your most impactful proof of work"},
    {"idea": "Come up with a redesign of the app whose UI frustrate you most"},
]

const copywritingIdeas = [
    {"idea": "Write a magazine ad for pizza scissors appealing to pizza shop owners."},
    {"idea": "Write an ad for Jay Z's Armand de Brignac Champagne using the Liking persuasion principle."},
    {"idea": "Pick a website and rewrite its meta title and description"},
    {"idea": "Write a case study on 10 British Brands to follow for Ads Copy inspiration"},
    {"idea": "Write an ad for Manchester United promoting season tickets."},
    {"idea": "Write an ad for a new line of bed sheets that experts have unanimously decided are the softest sheets of all time. BONUS: Give them a name and tagline."},
]

const marketingIdeas = [
    {"idea": "Write a case-study on \"5 most effective marketing strategies used by Tinder\""},
    {"idea": "Come up with 3 ways to repurpose an ebook content"},
    {"idea": "How Canva attracted their first 1000 Premium Users"},
    {"idea": "Prepare a list of communities where a SaaS brand can promote themselves"},
    {"idea": "Write a blog about the 10 best resources to learn storytelling"},
    {"idea": "Write a blog on \"How Freelancers market themselves?\""},
]

const communityIdeas = [
    {"idea": "Compile a list of tools that will be useful in Community Management"},
    {"idea": "Prepare a Twitter thread on the Top 5 blogs you should read as a community manager (mention the authors)"},
    {"idea": "Write a LinkedIn article on factors to keep in mind while choosing a community management platform for your community"},
    {"idea": "Write a blog on Rising of Web3 communities"},
    {"idea": "Compile a list of books a community manager should read - adding why they should read the books"},
    {"idea": "Write a blog on books you should read as a Community Manager"},
]

const writingIdeas = [
    {"idea": "Start a blog about introducing yourself to the internet"},
    {"idea": "Write an email to the one person you want to work with"},
    {"idea": "A blog on a guide about building a daily writing habit"},
    {"idea": "A blog about things you should avoid doing before publishing your writing work"},
    {"idea": "Write a blog about \"Why everyone should write?\""},
    {"idea": "Write an atomic essay about one of the movie/show you have watched recently"},
]

function randomDev() {
    let random = devIdeas[Math.floor(Math.random() * devIdeas.length)];
    const ideaForward = `“**${random.idea}.**”`;
    return ideaForward;
  }

  function randomDesign() {
    let random = designIdeas[Math.floor(Math.random() * designIdeas.length)];
    const ideaForward = `“**${random.idea}.**”`;
    return ideaForward;
  }

  function randomCopy() {
    let random = copywritingIdeas[Math.floor(Math.random() * copywritingIdeas.length)];
    const ideaForward = `“**${random.idea}.**”`;
    return ideaForward;
  }

  function randomMarketing() {
    let random = marketingIdeas[Math.floor(Math.random() * marketingIdeas.length)];
    const ideaForward = `“**${random.idea}.**”`;
    return ideaForward;
  }
  function randomCommunity() {
    let random = communityIdeas[Math.floor(Math.random() * communityIdeas.length)];
    const ideaForward = `“**${random.idea}.**”`;
    return ideaForward;
  }
  function randomWriting() {
    let random = writingIdeas[Math.floor(Math.random() * writingIdeas.length)];
    const ideaForward = `“**${random.idea}.**”`;
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