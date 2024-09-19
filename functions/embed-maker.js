import { EmbedBuilder, WebhookClient } from "discord.js"
import 'dotenv/config'
import { Translate } from "./lang-handler.js"

export function makeMessage(data) {
    var fields = makeFields(data)
    const embed = new EmbedBuilder()
        .setColor(0xAA11BF)
        .setTitle(Translate("changes"))
        .setURL(process.env.WEBSITE)
        .setDescription(Translate("changes_count", data.count))
        .addFields(fields)
        .setTimestamp()
        .setFooter({ text: 'Some Random People', iconURL: 'https://avatars.githubusercontent.com/u/123210096?s=1000&v=4' })
    const webhookClient = new WebhookClient({ url: process.env.WEBHOOK })
    webhookClient.send({
        username: Translate("username"), 
        embeds: [embed],
    })
}

/* Function that makes object for embed */
function makeFields(data){
    let fields = [{ name: Translate("info"), value: data['warnings'] }]
    data["changes"].forEach(element => {
        if (element["toTeacher"]) {
            var value =  `${element["class"]}: ${element["change"]} - ${element["toTeacher"]} - ${element["warnings"]}`
        }
        else {
            var value = `${element["class"]}: ${element["change"]} - ${element["warnings"]}`
        }
        fields.push({ name: Translate("hour", element["hour"]), value: value },)
    })
    return fields
}