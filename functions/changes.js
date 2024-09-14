import "dotenv/config"
import {JSDOM} from "jsdom"

async function decoder() {
    /* 
    Changing ISO-8859-2 encoding into UTF-8
    */
    var response = await fetch(process.env.WEBSITE)
    response = await response.arrayBuffer()
    response = Buffer.from(response)
    response = new TextDecoder('iso-8859-2').decode(response)
    response = Buffer.from(response, 'utf8')
    response = response.toString('utf8')
    
    //console.log(response) Testing
    //selectClass(doc)
    //console.log(response)
    return response
}

function selectClass(response){
    const doc = new JSDOM(response)
    const row = doc.window.document.getElementsByTagName("tr")
    const len = row.length
    console.log(process.env.CLASS)
    const class_split = process.env.CLASS.split(" ")
    const re = new RegExp(`[${class_split[0]}] [${class_split[1]}]`)

    var count = 0
    var obj = {changes:[], count: count, warnings: ""}

    for(var i = 0; i < len; i++){
        if(!re.exec(row[i].innerHTML)){continue} //Exec only on matching rows
        //console.log(row[i].getElementsByTagName("td")[0].innerHTML)
        var split = row[i].getElementsByTagName("td")[1].innerHTML.split(" - ")

        obj.changes.push({
            hour: Number(row[i].getElementsByTagName("td")[0].innerHTML.trim()),
            class: split[0].trim().replace("&nbsp;",""),
            //fromTeacher:
            toTeacher: row[i].getElementsByTagName("td")[2].innerHTML.trim().replace("&nbsp;",""),
            change: split[1].trim().replace("&nbsp;",""),
            warnings: row[i].getElementsByTagName("td")[3].innerHTML.trim().replace("&nbsp;","")
        })
        count++
    }

    obj.changes.sort(function(obj1, obj2) {
        // Ascending: first hour less than the previous
        return obj1.hour - obj2.hour
    })
    obj.count = count
    obj.warnings = doc.window.document.getElementsByTagName("nobr")[0].innerHTML.trim()
    console.log(obj) //testing
}


decoder().then(x => {
    selectClass(x)
})