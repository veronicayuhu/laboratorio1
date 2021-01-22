/*
Dada una matriz de cadenas, devuelve otra matriz que contiene todas sus cadenas más largas.
*/

//var inputArray = ["aba", "aa", "ad", "vcd", "aba"];
//var inputArray = ["enyky",  "benyky",   "yely",  "varennyky"];

function allLongestStrings(array) {
    var outputArray = [];
    var maxLength = array[0].length;

    for (var i = 0; i < array.length; i++) {
        if (maxLength < array[i].length) {
            maxLength = array[i].length;
        }
    }

    for (var i = 0; i < array.length; i++) {
        if (array[i].length == maxLength) {
            outputArray.push(array[i]);
        }
    }

    return outputArray;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["enyky",  "benyky",   "yely",  "varennyky"]));