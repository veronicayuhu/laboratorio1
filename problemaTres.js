// Para saber si la frase es un palindromo

var inputString = "aabb";
var fraseUser = prompt("Escribe una frase para saber si es un Palindromo", inputString);

function frasePalindromo(fraseUser) {
    fraseUser = fraseUser.toLowerCase().replace(/\s/g, "");
    fraserReverse = fraseUser.split("").reverse().toString();
    for (var i = 0; i < ((fraserReverse.length) - 1); i++) {
        fraserReverse = fraserReverse.replace(",", "");
    };
    if (fraseUser == fraserReverse) {
        resultado = "verdadero";
    } else {
        resultado = "falso";
    }
    console.log("Tu frase " + resultado);
}
frasePalindromo(fraseUser);