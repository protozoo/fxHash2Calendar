
function fxhashToCalendar(){    
    let dropName = document.querySelector("h3").textContent;
    let dropDate = getDropDate();
    let calendarURL = `https://calendar.google.com/calendar/u/0/r/eventedit?`;
    calendarURL += `dates=${dropDate}/${dropDate}`;
    calendarURL += `&text=fxHash Drop: ${dropName}`;
    calendarURL += `&details=Fxhash NFT drop "${dropName}". \nLink: ${window.location.href}`;
    
    window.open(
        encodeURI(calendarURL),
        'addwindow',
        'status=no,toolbar=no,width=520,height=470,resizable=yes'
    )
}

function getDropName(){
    let match = null;
    for (let element of document.querySelectorAll('h1')) {
        if (element.textContent.includes("Auction")) {
            match = element;
            break;
        }
    }
    if( match ){
        let name = match.textContent;
        console.log( name );
        return name;
    }
}

function getDropDate(){
    let fieldName = 'Auction starts';
    let match = null;
    for (let element of document.querySelectorAll('strong')) {
        if (element.textContent.includes(fieldName)) {
            match = element;
            break;
        }
    }
    let months = {
        'January': '01', 
        'February': '02',
        'March': '03',
        'April': '04',
        'May': '05',
        'June': '06',
        'July': '07',
        'August': '08',
        'September': '09',
        'October': '10',
        'November': '11',
        'December': '12'
    }
    // The date is actually in the next sibling element
    if( match ){
        let dateStr = match.nextSibling.textContent;
        let dateParts = dateStr.split(", ").join(" ").split(" ");
        let date = dateParts[2] + months[ dateParts[0] ] + dateParts[1];
        let time = dateParts[4].split(":").join("");
        let dateTime = date + "T" + time;
        console.log( dateTime);
        return dateTime
    }
}

fxhashToCalendar();