import { EmbedBuilder, WebhookClient } from "discord.js"
import 'dotenv/config'

export function makeMessage(data) {
    console.log(data)
    let fields = []
    console.log(fields)
    const embed = new EmbedBuilder()
        .setColor(0xAA11BF)
        .setTitle('Zastępstwa')
        .setURL(process.env.WEBSITE)
        .setDescription('Ilość zastępstw: 2')
        /*
        .addFields(
            { name: 'Informacje', value: 'Zastępstwa w dniu 05.06.2024 środa \nDrugie?' },
            { name: 'Godzina: 1', value: 'Klasa: 4 I Zmiana: matematyka - 205 Nauczyciel: Torzilla'},
            { name: 'Godzina: 2', value: 'Klasa: 4 I Zmiana: matematyka - 205 Nauczyciel: Torzilla'},
            { name: 'Godzina: 2', value: 'Klasa: 4 I Zmiana: matematyka - 205 Nauczyciel: Torzilla'},
            { name: 'Godzina: 2', value: 'Klasa: 4 I Zmiana: matematyka - 205 Nauczyciel: Torzilla'},
            { name: 'Godzina: 2', value: 'Klasa: 4 I Zmiana: matematyka - 205 Nauczyciel: Torzilla'},
            { name: 'Godzina: 2', value: 'Klasa: 4 I Zmiana: matematyka - 205 Nauczyciel: Torzilla'},
            { name: 'Godzina: 2', value: 'Klasa: 4 I Zmiana: matematyka - 205 Nauczyciel: Torzilla'},
            { name: 'Godzina: 2', value: 'Klasa: 4 I Zmiana: matematyka - 205 Nauczyciel: Torzilla'},
            { name: 'Godzina: 2', value: 'Klasa: 4 I Zmiana: matematyka - 205 Nauczyciel: Torzilla'},
        )
        */
        .addFields(

        )
        .setTimestamp()
        .setFooter({ text: 'Some Random People', iconURL: 'https://avatars.githubusercontent.com/u/123210096?s=1000&v=4' })
    const webhookClient = new WebhookClient({ url: process.env.WEBHOOK })
    webhookClient.send({
        content: 'Webhook',
        username: 'Szkola',
        embeds: [embed],
    })
}

function makeFields(data){
    //let 
}