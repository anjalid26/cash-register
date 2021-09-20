const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availaibleNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener('click', () => {
    hideMessage();

    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("Cash given should by greater than the bill amount");
        }
    } else {
        showMessage("Invalid amount");
    }
});

function calculateChange(amountToBeReturned) {
    for(let i=0; i < availaibleNotes.length; i++) {

        const numberOfNotes = Math.trunc(amountToBeReturned / availaibleNotes[i]);

        amountToBeReturned = amountToBeReturned % availaibleNotes[i];

        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}
