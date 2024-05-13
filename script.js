const adviceButton = document.querySelector(".advice-button");
const adviceText = document.querySelector(".card-container-advice");
const adviceId = document.querySelector(".card-container p");



// Dice Button Function
const diceButton = () => {
    fetch("https://api.adviceslip.com/advice")
    .then((response) => {
        if (!response.ok) {
            throw new Error ('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        adviceText.textContent = data.slip.advice;
        adviceId.textContent = `Advice #${data.slip.id}`;
    })
    .catch((error) => {
        console.log('There has been a problem with your fetch operation:', error);
    })
    }

// Event Listener

adviceButton.addEventListener("click", diceButton);