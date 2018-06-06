"use strict";
const fs = require('fs');

let dataSet = JSON.parse(fs.readFileSync('./init.json'));

dataSet.forEach(item => {
    item.location = makeLocation()
});

function makeLocation() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 3; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

fs.writeFileSync('./init.json', JSON.stringify(dataSet), {encoding:"utf-8"});