(function () {

    let mountains = [
        { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
        { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
        { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
        { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
        { name: "Monte Amiata", height: 1738, place: "Siena" }
    ];

    const generateTablesHead = (table: any, data: any[]) => {

        let thead = table.createTHead();
        let row = thead.insertRow();

        for (const key of data) {
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }
        
    }

    const generateTable = (table: any, data: any[]) => {

        for (const element of data) {
            let row = table.insertRow();
            for (const key in element) {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text)
            }
        }
    }

    let table = document.querySelector("table");
    let data = Object.keys(mountains[0]);
    generateTablesHead(table, data);
    generateTable(table, mountains);
}());
