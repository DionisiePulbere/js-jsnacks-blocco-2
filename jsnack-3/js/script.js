// - Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
// creo un'arrey di numeri 
const numbers =[10, 20, 23, 56, 17, 12, 8, 13, 1, 93, 88];
// preparo 2 arrey vuote
const pari = [];
const dispari = [];
// creo un ciclo 
for (let i = 0; i < numbers.length; i++){
    // stabilisco le condizioni per i pari
    if (numbers[i] % 2 === 0){
        pari.push(numbers[i]);
        
    } 
    // stabilisco le condizioni per i dispari
    else {
        dispari.push(numbers[i]);
    }
}
// stampo i numeri nei realtivi div all'interno del DOM
const userMessageDispari = document.querySelector('#rosso');
    userMessageDispari.innerHTML = dispari;

const userMessagePari = document.querySelector('#verde');
    userMessagePari.innerHTML = pari;
