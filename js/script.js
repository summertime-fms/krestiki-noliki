for(let i=0; i < 9; i++) {
    document.querySelector(".field__wrapper").innerHTML+='<div class="block"></div>'
}
let allBlocks = document.getElementsByClassName("block");
let fieldMain = document.querySelector(".field");
let hod = 0;
let zeroFirst = Math.round(Math.random());

document.querySelector(".field__button").onclick = function() {
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
        if (hod == 9) {
            let restart = document.querySelector(".field__button--restart");
            restart.style.display = "inline-block";
            document.querySelector(".field__wrapper").style.opacity = "0.5";
            // document.querySelector(".field__button").style.display = "none";
        }
        hod++;        
        checkWinner();
    }
} 
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
                // reboot();
                break
            } else if (winComb[i][0].classList.contains("zero") && winComb[i][1].classList.contains("zero") && winComb[i][2].classList.contains("zero")) {
                highlight(winComb[i])
                // reboot();
             break 
            }
        
    }

    function reboot() {
        for (let i = 0; i < allBlocks.length; i++) {
            allBlocks[i].classList.remove("zero");
            allBlocks[i].classList.remove("cross");
        }
        document.querySelector('.field__info').textContent = '';
        hod = 0;
    }
}
}

function highlight(element) {
    for (let j = 0; j < 3; j++) {
        element[j].style.backgroundColor = "red"
    }
}