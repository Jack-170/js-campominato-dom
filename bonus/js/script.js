// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
//  - difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe; - difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81,
//   divise in 9 caselle per 9 righe; - difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; 



// creo una funzione che mi generi la griglia 
function generateGrid() {

    const cellsContainer = document.querySelector(".cells-container .d-flex");
    // creo un array per le bombe richiamando la funzione creata per i numeri random

    const bombPositions = genArray(1, 100, 16);

    // creo uno score
    let score = 0;

    // dichiaro la difficoltà scelta dall'utente
    const difficulty = parseInt(document.getElementById("difficulty").value, 10);
    console.log( "difficoltà scelta: ",difficulty);

    // dichiaro le celle totali
    let totalCells = 100 ;

    if (difficulty === 1) {
        totalCells = 100;
    } else if (difficulty === 2) {
        totalCells = 81;
    } else if (difficulty === 3) {
        totalCells = 49;
    }



 

    // Creo una griglia di 100 celle
    for (let i = 1; i <= totalCells; i++) {
        const cell = document.createElement("div");
        // aggiungo le celle ai div
        cell.classList.add("cells-easy");

        // aggiungo un if per modificare le celle in base alla difficoltà
        if (difficulty === 1) {
            cell.classList.add("cells-easy");
        } else if (difficulty === 2) {
            cell.classList.add("cells-medium");
        } else if (difficulty === 3) {
            cell.classList.add("cells-hard");
        }
        
        // aggiungo i numeri alle cellex
        cell.textContent = i;
        // aggiungo i div(classe cells) al cellsContainer
        cellsContainer.append(cell);


        // aggiungo un EventListener in modo che al click la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
        cell.addEventListener("click", () => {
            if (bombPositions.includes(i)) {
                cell.classList.add("bomb");
                alert("Hai cliccato su una bomba! Partita terminata.Il tuo puneggio è di: " + score);
                console.log("Peccato hai perso, hai preso la bomba nella cella: ", i);

                
            } else {
                cell.classList.add("bg-lightblue");
                // incremento lo score 
                score++;
                console.log("Numero cella cliccata: ", i);
                console.log("Punteggio attuale: ", score);
               
            }
    }   );}
}   

// associo la funzione precedentemente creata al click del bottone 
document.addEventListener("click", 
    function() {
        const startButton = document.getElementById("startgame");
        startButton.addEventListener("click", generateGrid);
});




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







