import { Client, Collection, GatewayIntentBits } from 'discord.js'
import 'dotenv/config'
import * as data from './commands/changes.js'
import { check } from './functions/check-handler.js'

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.commands = new Collection();
client.commands.set('changes', data);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
    check(client.channels.cache.get(process.env.CHANNEL_ID))
})

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;
	const command = interaction.client.commands.get(interaction.commandName);
	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});

client.login(process.env.TOKEN)