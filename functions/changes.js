import "dotenv/config"
//import { parseFromString } from 'dom-parser'
import {JSDOM} from "jsdom"

async function logChanges() {
    /* 
    Changing ISO-8859-2 encoding into UTF-8
    */
    var response = await fetch(process.env.WEBSITE)
    response = await response.arrayBuffer()
    response = Buffer.from(response)
    response = new TextDecoder('iso-8859-2').decode(response)
    response = Buffer.from(response, 'utf8')
    response = response.toString('utf8')
    const doc = new JSDOM(response)
    //console.log(response)
    selectClass(doc)
}

function selectClass(doc){
   const len = doc.window.document.getElementsByClassName("st8").length
   console.log(len)
}

logChanges()