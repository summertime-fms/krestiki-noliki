for(let i=0; i < 9; i++) {
    document.querySelector(".field__wrapper").innerHTML+='<div class="block"></div>'
}

let allBlocks = document.getElementsByClassName("block");
let fieldMain = document.querySelector(".field");
let hod = 0;
let zeroFirst = Math.round(Math.random());
let playButton = document.querySelector(".field__button--play");


playButton.addEventListener("click", function() {
    for (let i = 0; i < allBlocks.length; i++) {
    allBlocks[i].style.cursor = "pointer";
    }

if (zeroFirst) {
    fieldMain.innerHTML+='<p class="field__info">Первыми ходят крестики!</p>'
    hod = zeroFirst;
    
} else {
    fieldMain.innerHTML+='<p class="field__info">Первыми ходят нолики!</p>'
    hod = zeroFirst; 
}




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
            if (winComb[i][0].classList.contains("cross") && winComb[i][1].classList.contains("cross") && winComb[i][2].classList.contains("cross")) {
                highlight(winComb[i])
                buttonShow(document.querySelector(".field__button--restart"));
                break
            } else if (winComb[i][0].classList.contains("zero") && winComb[i][1].classList.contains("zero") && winComb[i][2].classList.contains("zero")) {
                highlight(winComb[i])
                buttonShow(document.querySelector(".field__button--restart"));
             break 
            }
        
    }
    (document.querySelector(".field__button--restart")).addEventListener("click", function() {
        reboot();
    })
    function reboot() {
        for (let i = 0; i < allBlocks.length; i++) {
            allBlocks[i].classList.remove("zero");
            allBlocks[i].classList.remove("cross");
            allBlocks[i].classList.remove("block--red");
        }
        document.querySelector('.field__info').textContent = '';
        hod = 0;
    }

    
}


function highlight(element) {
    for (let j = 0; j < 3; j++) {
        element[j].classList.add("block--red");
    }  
}
function buttonShow(button) {
    button.classList.add("button--showed")
}
