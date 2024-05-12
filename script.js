const adviceButton = document.querySelector(".advice-button");
const adviceText = document.querySelector(".card-container-advice");
const adviceId = document.querySelector(".card-container p");




const diceButton = () => {
    fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
        adviceText.textContent = data.slip.advice;
        adviceId.textContent = `Advice #${data.slip.id}`;
   
    }) 

}   











adviceButton.addEventListener("click", diceButton);