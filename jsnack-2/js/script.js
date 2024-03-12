// - L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// chiedere le due parole 
const firstWord = prompt("Inserisci la prima parola");
const secondWord = prompt("Inserisci la seconda parola");

// stabilire qual'è la più corta e qaul'è la più lunga e determinarne l'ordine 
if (firstWord.length > secondWord.length){
    alert(`${secondWord} ${firstWord}`);
} else {
    alert(`${firstWord} ${secondWord}`);
}