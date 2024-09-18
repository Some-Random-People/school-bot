import * as crypto from 'crypto'
import { changes } from './functions/changes.js'
import 'dotenv/config'

async function check() {
    let last = ''
    while(true) {
        await new Promise(resolve => { setTimeout(resolve, 60000) })
        let hash = ''
        let response = ''
        try {
            response = await fetch(process.env.WEBSITE)
        } catch {
            console.error("Can't load website")
            continue
        }
        await response.text().then(text => hash = crypto.createHash('sha256').update(text).digest('hex'))
        if (last == '') { 
            last = hash
        }
        if(last == hash)
            continue
        last = hash
        changes()
    }
}

check()