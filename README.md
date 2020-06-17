# Vanilla javascript table transpiled from Typescript

interview time and I have to nuild a table

## Ref -> great article

Back To The Basics: How To Generate a Table With JavaScript
February 2, 2020 by Valentino Gagliardi- 8 minutes read
https://www.valentinog.com/blog/html-table/['https://www.valentinog.com/blog/html-table/[']
https://twitter.com/gagliardi_vale['https://twitter.com/gagliardi_vale']

### Setup

```yarn / npm

yarn install
yarn serve
```

### Dependancies

current verison or higher

```json
  "concurrently": "^5.2.0",
    "lite-server": "^2.5.4",
    "tslib": "^1.9.0"
    "@types/node": "~6.0.60",
    "nodemon": "^1.17.3",
    "ts-node": "^6.0.2",
    "tslint": "~5.19.0",
    "typescript": "~3.5.3"
```

### HTML

```html
.....
<body>
  <table>
    <!-- Juicy Stuff Goes Here -->
  </table>
</body>
.....
```

### TS

Wrapped inside an IIFE (closure)

Fat arrow functions

```ts
(function () {
  let mountains = [
    { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
    {
      name: "Monte Falterona",
      height: 1654,
      place: "Parco Foreste Casentinesi",
    },
    { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
    { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
    { name: "Monte Amiata", height: 1738, place: "Siena" },
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
  };

  const generateTable = (table: any, data: any[]) => {
    for (const element of data) {
      let row = table.insertRow();
      for (const key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  };

  let table = document.querySelector("table");
  let data = Object.keys(mountains[0]);
  generateTablesHead(table, data);
  generateTable(table, mountains);
})();
```

### Transpiled JS

```js
"use strict";
(function () {
  var mountains = [
    { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
    {
      name: "Monte Falterona",
      height: 1654,
      place: "Parco Foreste Casentinesi",
    },
    { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
    { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
    { name: "Monte Amiata", height: 1738, place: "Siena" },
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
})();
```
