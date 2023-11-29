// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// creo una funzione che mi generi la griglia 
function generateGrid() {
    const cellsContainer = document.querySelector(".cells-container .d-flex");


    // creo un array per le bombe richiamando la funzione creata per i numeri random

    const bombPositions = genArray(1, 100, 16);

    
    // Creo una griglia di 100 celle
    for (let i = 1; i <= 100; i++) {
        const cell = document.createElement("div");
        // aggiungo le celle ai div
        cell.classList.add("cells");
        // aggiungo i numeri alle cellex
        cell.textContent = i;
        // aggiungo i div(classe cells) al cellsContainer
        cellsContainer.append(cell);


        // aggiungo un EventListener in modo che al click la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
        cell.addEventListener("click", () => {
            if (bombPositions.includes(i)) {
                cell.classList.add("bomb");
                console.log("Hai cliccato su una bomba! Partita terminata.");
                // Aggiungi qui la logica per terminare il gioco quando si clicca su una bomba
            } else {
                cell.classList.add("bg-lightblue");
                console.log("Numero cella cliccata: ", i);
                // Aggiungi qui la logica per continuare il gioco quando si clicca su una cella senza bomba
            }
        });
    }

}
// associo la funzione precedentemente creata al click del bottone 
document.addEventListener("click", 
    function() {
        const startButton = document.getElementById("startgame");
        startButton.addEventListener("click", generateGrid);
});



// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

// creo una funzione che generi un numero casuale in un range
function genRandomNumberMinMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// creo una funzione che generi un array con ordinamento randomico di numeri in un range

function genArray(minNum, maxNum, arrayLength) {
    const newNumbers = [];
    
    while (newNumbers.length < arrayLength) {
        let randomNumber = genRandomNumberMinMax(minNum, maxNum);
        if (!newNumbers.includes(randomNumber)) {
            newNumbers.push(randomNumber);
        }
    }
    
    return newNumbers;
}







