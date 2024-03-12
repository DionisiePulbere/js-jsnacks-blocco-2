// - L'utente inserisce un numero nel prompt, se è pari stampa il numero,
// se è dispari stampa il numero successivo

// chiedere il numero all'utente 
const userNumber = parseInt(prompt("Inserire un numero"))

// creare la variabile e stabilire se è pari o dispari e il relativo comportamento 
let userMessage;
if (userNumber % 2 === 0){
    userMessage = userNumber;
} else {
    userMessage = userNumber + 1;
}
// stampare il risultato
alert(userMessage);

