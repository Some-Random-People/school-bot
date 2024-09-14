import { EmbedBuilder, WebhookClient } from "discord.js"
import 'dotenv/config'
import { Translate } from "./lang-handler.js"

export function makeMessage(data) {
    //console.log(data)
    const embed = new EmbedBuilder()
        .setColor(0xAA11BF)
        .setTitle('Zastępstwa')
        .setURL(process.env.WEBSITE)
        .setDescription(Translate("changes_count", data.count))
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
        username: 'Szkola', 
        embeds: [embed],
    })
}

function makeFields(data){
    let fields = {}
}