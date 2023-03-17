const lavori = [
  {text: "Esp32 Server"},
  {text: "Txc Roulette"},
  {text: "Gestionale Flask"},
];

// loop di testo principale
const testo_principale = [`Ciao, sono Federico Caporuscio, 
un developer alle prime armi. 
Su questo sito condividerò la mia esperienza 
di apprendimento nel mondo della programmazione. Troverete
i miei obiettivi, i progetti che ho sviluppato e come ho 
risolto i problemi tecnici. `];

let currentIndex = 0;

function scriviTestoPrincipale() {
  const div = document.getElementById("txt_principale");
  let index = 0;
  const timer = setInterval(function() {
    const char = testo_principale[currentIndex].charAt(index);
    if (char === "<") {
      // se il carattere è "<", imposta l'indice sulla fine del tag
      index = testo_principale[currentIndex].indexOf(">", index) + 1;
    } else {
      // altrimenti, aggiungi il carattere all'innerHTML del div
      div.innerHTML += char;
      index++;
    }
    if (index == testo_principale[currentIndex].length) {
      clearInterval(timer);
      //imposta tempo scrittura
      setTimeout(scriviTesto, 1000);
    }
  }, 50);
}


function scriviTesto() {
  const div = document.getElementById("testo_lavori");
  let index = 0;
  const timer = setInterval(function() {
    div.textContent += lavori[currentIndex].text.charAt(index);
    index++;
    if (index == lavori[currentIndex].text.length) {
      clearInterval(timer);
      //imposta tempo scrittura
      setTimeout(cancellaTesto, 2000);
    }
  }, 50);
}

function cancellaTesto() {
  const div = document.getElementById("testo_lavori");
  let index = div.textContent.length;
  const timer = setInterval(function() {
    div.textContent = div.textContent.substring(0, index);
    index--;
    if (index == -1) {
      clearInterval(timer);
      currentIndex = (currentIndex + 1) % lavori.length; // loop tra gli elementi
      setTimeout(scriviTesto, 2000);
    }
  }, 30);
}

window.onload = scriviTestoPrincipale;

//redirect funzione page html
function progetti() {
  location.href = "progetti.html"  
};





