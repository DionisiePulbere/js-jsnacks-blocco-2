// - Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

// stabilisco qaunte cifre
const howManyNumbers = 4;
// chiedo all'utente di fornire il numero 
const userNumber = prompt("Inserire un numero di " + howManyNumbers + " cifre");
// dichiaro una variabile somma 
let sum = 0;
// creo un ciclo for 
for (let i = 0; i < userNumber.length ; i++){
    // somma le cifre tra di loro traformandole da stringa a numero
    sum += parseInt(userNumber[i]);
}
// stampo il risultato 
console.log(sum);
