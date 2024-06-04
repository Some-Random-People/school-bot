import { SlashCommandBuilder } from "discord.js"
import { makeEmbed } from '../functions/embed-maker.js'
import 'dotenv/config'

export const data = new SlashCommandBuilder()
    .setName('changes')
    .setDescription('Check last changes')
export async function execute(interaction) {
    await interaction.reply({ embeds: [makeEmbed()] })
}