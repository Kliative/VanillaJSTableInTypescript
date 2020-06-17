"use strict";
(function () {
    var mountains = [
        { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
        { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
        { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
        { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
        { name: "Monte Amiata", height: 1738, place: "Siena" }
    ];
    var generateTablesHead = function (table, data) {
        var thead = table.createTHead();
        var row = thead.insertRow();
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var key = data_1[_i];
            var th = document.createElement("th");
            var text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }
    };
    var generateTable = function (table, data) {
        for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
            var element = data_2[_i];
            var row = table.insertRow();
            for (var key in element) {
                var cell = row.insertCell();
                var text = document.createTextNode(element[key]);
                cell.appendChild(text);
            }
        }
    };
    var table = document.querySelector("table");
    var data = Object.keys(mountains[0]);
    generateTablesHead(table, data);
    generateTable(table, mountains);
}());
