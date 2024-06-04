import { EmbedBuilder } from "discord.js"

export function makeEmbed(data) {
    const embed = new EmbedBuilder()
        .setColor(0xAA11BF)
        .setTitle('TEST')
        .setURL(process.env.WEBSITE)
        .setDescription('TEST')
        .addFields(
            { name: 'TEST', value: 'TEST' },
        )
        .setTimestamp()
        .setFooter({ text: 'TEST', iconURL: 'https://avatars.githubusercontent.com/u/123210096?s=1000&v=4' })
    return embed
}