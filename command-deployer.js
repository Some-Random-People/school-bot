import { REST, Routes } from "discord.js"
import 'dotenv/config'

const commands = [
    {
        name: 'changes',
        description: 'Get last changes',
    },
]

const rest = new REST().setToken(process.env.TOKEN);

try {
    console.log('Reloading application commands')
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands })
} catch (error) {
    console.error(error)
}