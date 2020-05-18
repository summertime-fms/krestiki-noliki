let buttonStart = document.querySelector(".field__button");
function getRandomNumber() {
   return Math.round(Math.random())
}

buttonStart.addEventListener("click", function() {
    let isTrue = getRandomNumber();
})

console.log(isTrue);