/*
Escriba una función que invierta los caracteres entre paréntesis (posiblemente anidados) 
en la cadena de entrada. 
Las cadenas de entrada siempre estarán bien formadas con coincidencias () s. 
*/

function reverseInParentheses(cadena) {
    var regExp = /\(([^)]+)\)/g;
    var matches = cadena.match(regExp);
    var data = cadena.split(regExp);

    for (var i = 0; i < data.length; i++) {
       
        for(var j = 0; j < matches.length; j++){
            var str = matches[j];
            str = str.substring(1, str.length - 1);
            if (data[i] == str) {
                data[i] = str.split('').reverse().join('');
            }
        }
       
    }

    return data.join('');
}

console.log(reverseInParentheses("(bar)"));
console.log(reverseInParentheses("foo(bar)baz"));
console.log(reverseInParentheses("foo(bar)baz(blim)"));