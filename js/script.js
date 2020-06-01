for(let i=0; i < 9; i++) {
    document.querySelector(".field__wrapper").innerHTML+='<div class="block"></div>'
}

let allBlocks = document.getElementsByClassName("block");
let fieldMain = document.querySelector(".field");
let hod = 0;
let playButton = document.querySelector(".field__button--play");
let restartButton = document.querySelector(".field__button--restart");


function whoFirst() {
    let zeroFirst = Math.round(Math.random());

    if (zeroFirst) {
        let message = document.createElement("p");
        message.className = 'field__info';
        message.innerHTML = 'Первыми ходят крестики!';
    
        fieldMain.append(message);
        hod = zeroFirst;
        
    } else {
        let message = document.createElement("p");
        message.className = 'field__info';
        message.innerHTML = 'Первыми ходят нолики!';
    
        fieldMain.append(message);
        hod = zeroFirst; 
    }
    }


playButton.addEventListener("click", function() {
    for (let i = 0; i < allBlocks.length; i++) {
    allBlocks[i].style.cursor = "pointer";
    }

   whoFirst();

let field = document.querySelector(".field__wrapper");

field.onclick = function(event) {

    if (event.target.className == 'block') {

        if (hod % 2 == 0) {

            event.target.classList.add("zero");
        } else {

            event.target.classList.add("cross");
        }
        
        hod++;        
        checkWinner();
    }
} });

function checkWinner() {
    let allBlocks = document.getElementsByClassName("block");
    let winComb = [
        [allBlocks[0], allBlocks[1], allBlocks[2]],
        [allBlocks[3], allBlocks[4], allBlocks[5]],
        [allBlocks[6], allBlocks[7], allBlocks[8]],
        [allBlocks[0], allBlocks[3], allBlocks[6]],
        [allBlocks[1], allBlocks[4], allBlocks[7]],
        [allBlocks[2], allBlocks[5], allBlocks[8]],
        [allBlocks[0], allBlocks[4], allBlocks[8]],
        [allBlocks[2], allBlocks[4], allBlocks[6]]
    ];
    for (let i = 0; i < winComb.length; i++) {

        if (winComb[i][0].classList.contains('cross') && winComb[i][1].classList.contains("cross") && winComb[i][2].classList.contains("cross")) {

                highlight(winComb[i])
                restartButton.classList.add('button--showed');
                playButton.setAttribute('disabled', '')
 
                break
            } else if (winComb[i][0].classList.contains('zero') && winComb[i][1].classList.contains("zero") && winComb[i][2].classList.contains("zero")) {

                highlight(winComb[i])
                restartButton.classList.add('button--showed');
                playButton.setAttribute('disabled', '')
               
             break 
            }
        
    }

    
}
function reboot() {
    for (let i = 0; i < allBlocks.length; i++) {
        allBlocks[i].classList.remove("zero");
        allBlocks[i].classList.remove("cross");
        allBlocks[i].classList.remove("block--red");
        allBlocks[i].classList.remove("block--disable");
    }
    
    hod = 0;
}

restartButton.addEventListener("click", function() {
    reboot();
    document.querySelector('.field__info').remove();
    whoFirst();
})


function highlight(element) {
    for (let j = 0; j < 3; j++) {
        element[j].classList.add("block--red");
    }  
    for (let i = 0; i < allBlocks.length; i++) {
        if (!allBlocks[i].classList.contains("block--red")) {
            allBlocks[i].classList.add("block--disable");
        }
    }
}
