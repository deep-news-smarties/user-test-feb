const dfInvitation = document.querySelector("#invitation");
const dfPayment = document.querySelector("#payment-methods");
const dfThanks = document.querySelector("#thanks");
const dfFeedback = document.querySelector("#feedback");

const noButton = document.querySelector("#no-btn");
const justThanksButton = document.querySelector("#just-thanks-btn");
const paymentButton = document.querySelector("#payment-btn");
const paymentMethodsBtns = document.querySelectorAll(".df-btn");

const amountInput = document.querySelector(".amount-input");
const paymentValue = document.querySelector("#pp-payment-value")

noButton.addEventListener("click", showThanksForFeedback);
justThanksButton.addEventListener("click", showThankYouMessage);
paymentButton.addEventListener("click", showPaymentMethods);
paymentMethodsBtns[0].addEventListener("click", showThankYouMessage);
paymentMethodsBtns[1].addEventListener("click", showThankYouMessage);
paymentMethodsBtns[2].addEventListener("click", showThankYouMessage);
amountInput.addEventListener("input", changeAmount);

function showThanksForFeedback() {
    dfInvitation.style.display = "none";
    dfFeedback.style.display = "block";
};

function showThankYouMessage() {
    dfInvitation.style.display = "none";
    dfPayment.style.display = "none";
    dfThanks.style.display = "block";
};

function showPaymentMethods() {
    dfInvitation.style.display = "none";
    dfPayment.style.display = "block";
};

function changeAmount() {
    const value = amountInput.value;
    const valueWithComma = value.replace(".",",");
    console.log(value.replace(".",","))
    paymentValue.textContent = value === "1" ? `${valueWithComma},00 €` : `${valueWithComma}0 €`;
}
