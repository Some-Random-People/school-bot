import { REST, Routes } from "discord.js"
import 'dotenv/config'

const commands = [
    {
        name: 'ping',
        description: 'Am I working?',
    }
]

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN)

try {
    console.log('Reloading application commands')
    await rest.put(Routes.applicationCommand(process.env.CLIENT_ID), { body: commands })
} catch (error) {
    console.error(error)
}