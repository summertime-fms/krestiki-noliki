for(let i=0; i < 9; i++) {
    document.querySelector(".field__wrapper").innerHTML+='<div class="block"></div>'
}
let allBlocks = document.getElementsByClassName("block");
// const cross = '<div class="cross"></div>';
// const zero = '<div class="zero"></div>';

document.querySelector(".field__button").onclick = function() {
for (let i = 0; i < allBlocks.length; i++) {
allBlocks[i].style.cursor = "pointer";
}
let fieldMain = document.querySelector(".field");
let hod = Math.round(Math.random());
if (hod) {
    fieldMain.innerHTML+='<p class="field__info">Первыми ходят нолики!</p>'
} else {
    fieldMain.innerHTML+='<p class="field__info">Первыми ходят крестики!</p>'
}

let field = document.querySelector(".field__wrapper");
field.onclick = function(event) {
    if (event.target.className == 'block') {
        if (hod % 2 == 0) {
            event.target.classList.add("cross");
        } else {
        event.target.classList.add("zero");
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
                alert("Победили крестики!")
                reboot();
             break 
            }
            if (winComb[i][0].classList.contains("zero") && winComb[i][1].classList.contains("zero") && winComb[i][2].classList.contains("zero")) {
                alert("Победили нолики!");
                reboot();
             break 
            }
        
    }
}
    function reboot() {
        for (let i = 0; i < allBlocks.length; i++) {
            allBlocks[i].classList.remove("zero");
            allBlocks[i].classList.remove("cross");
        }
    }
}

