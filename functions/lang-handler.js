import 'dotenv/config'
import * as fs from 'fs'

export function Translate(translationString, ...args) {
    try {
        let data = fs.readFileSync(`./locales/${process.env.LOCALES}.json`, 'utf8')
        data = JSON.parse(data) 
        if(!data[translationString])
            console.error(`Can't find translation`)
        let translation = data[translationString]
        if(args.length > 0) {
            args.forEach(element => {
                translation = translation.replace('%s', element)
            })
        }
        return translation
    } catch (err) {
        console.error(err)
    }
}