let i = 0
let type = "z"

import fetch from 'node-fetch';
import {pokenames} from './ext.js';
import {name} from './ext.js';

// let p1 = "Bulbasaur"
// eval('var ' + p1 = "evolution")
// console.log(Bulbasaur)

let Bulbasaur = {
    name: "Bulbasaur",
    sp_attack: 65,
    sp_defence: 65,
    speed: 45,
    type1: "grass",
    type2: "poison",
    weight_kg: 6.9,
    abilities: ["overgrow", "chlorophyll"]
}

let Ivysaur = {
    name: "Ivysaur",
    sp_attack: 80,
    sp_defence: 80,
    speed: 60,
    type1: "grass",
    type2: "poison",
    weight_kg: 13,
    abilities: ["overgrow", "chlorophyll"]
}

let pk1 = [Bulbasaur, Ivysaur]

// console.log(pk1[1].abilities[1])

    function processFile(){
        var file = document.querySelector('#myFile').files[0];
        var reader = new FileReader();
        reader.readAsText(file);
      
        //if you need to read a csv file with a 'ISO-8859-1' encoding
        /*reader.readAsText(file,'ISO-8859-1');*/
      
        //When the file finish load
        reader.onload = function(event) {
      
          //get the file.
          var csv = event.target.result;
      
          //split and get the rows in an array
          var rows = csv.split('\n');
          console.log("Number of rows : " + rows)
      
          //move line by line
          for (var i = 1; i < 5; i++) {
            //split by separator (,) and get the columns
            cols = rows[i].split(';');
      
            // //move column by column
            for (var j = 0; j < cols.length; j++) {
                var value = cols[j];
            }
            console.log(rows[i])
          }
        }
    }


function higPara() {
    let k1 = document.getElementById("m31")
    k1.style.width = "99%"
    type = "h"
    initi()
    setInterval(tpara1, 36)
}

function lowPara() {
    let k1 = document.getElementById("m31")
    k1.style.width = "10%"
    type = "l"
    initi()
    setInterval(tpara2, 36)
}

function medPara() {
    let k1 = document.getElementById("m31")
    k1.style.width = "50%"
    type = "m"
    initi()
    setInterval(tpara3, 36)
}

function initi() {
    i = document.getElementById("msize")
    if (i == "some") {
        i = 75
    }
    else {
        switch (i) {
            case "h":
              i = 99;
              break;
            case "l":
              day = "Monday";
              break;
            case "m":
              day = "Tuesday";
              break;
          }
    }
}

function tpara1() {
    let k2 = document.getElementById("msize")
    if (i < 100) {
        k2.innerText = i + "GB"
        i++    
    }
    else {
        clearInterval()
    }
}

function tpara2() {
    let k2 = document.getElementById("msize")
    if (i > 10) {
        k2.innerText = i + "GB"
        i--    
    }
    else {
        clearInterval()
    }
}

function tpara3() {
    let k2 = document.getElementById("msize")
    if (i < 50) {
        k2.innerText = i + "GB"
        i--    
    }
    else {
        clearInterval()
    }
}

