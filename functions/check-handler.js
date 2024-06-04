import { makeEmbed } from './embed-maker.js'
import * as crypto from 'crypto'

export async function check(channel) {
    let last = ''
    while(true) {
        await new Promise(resolve => { setTimeout(resolve, 60000) })
        let hash = ''
        let response = await fetch(process.env.WEBSITE)
        response.text().then(text => hash = crypto.createHash('sha256').update(text).digest('hex'))
        if (last == '') { 
            last = hash
        }
        if(last == hash)
            continue
        channel.send({embeds: [makeEmbed()]});
    } 
}