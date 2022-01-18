
function reset() {
    const reset = document.querySelector('#reset');
    reset.addEventListener('click', () => {
        const remGrid = document.querySelectorAll('.cell');
        for (let box of remGrid) {
            drawpad.removeChild(box);
        }
         
        const newNumber = prompt("Gib ein, wie viele Felder die Zeichenfläche haben soll:");
        if (newNumber > 100) {
            prompt("Gib eine Zahl ein, die kleiner als 100 ist!");
        } else {
            const multi = newNumber * newNumber;
            addBoxes(multi);
            changeColor();
        } 
     });
     
}

function addBoxes(multi) {
        for(i = 0; i <= multi; i++) {
           const box = document.createElement('div');
           box.classList.add('cell');
           const drawpad = document.querySelector('#drawpad');
            drawpad.appendChild(box);  
        }
}
function changeColor(box) {
    const felder = document.querySelectorAll('.cell');
    for (let box of felder) {
    box.addEventListener('mouseover', () => {
      randomColor(box);
       console.log("event listener triggert");
    });

    }
}
function randomColor(box) {
    const z1 = Math.floor(Math.random() * 256);
    const z2 = Math.floor(Math.random() * 256);
    const z3 = Math.floor(Math.random() * 256);
    const bGC =  'rgb(' + [z1, z2, z3].join(', ') + ')';
    box.style.background = bGC;
}

addBoxes();
changeColor();
reset();