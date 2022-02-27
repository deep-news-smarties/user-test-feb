const dfInvitation = document.querySelector(".fe2h5v9");
const dfBackdrop = document.querySelector(".backdrop");
const dfPayment = document.querySelector(".fuuft2r");
const dfThanks = document.querySelector(".f1khh0lw");
const dfFinal = document.querySelector(".f1sq6n18");

const dankeBtn = document.querySelector("#danke-btn");
const amountInput = document.querySelector(".amount-input");
const paymentValue = document.querySelector("#pp-payment-value")
const closeIcons = document.querySelectorAll(".close-btn");
const paymentMethods = document.querySelectorAll(".payment-method");
const backToFocusBtn = document.querySelector(".f6e2hlp");

console.log(amountInput.value)

dankeBtn.addEventListener("click", openPaymentModal);
closeIcons[0].addEventListener("click", closeModalWithoutPayment);
closeIcons[1].addEventListener("click", closeModalWithPayment);
backToFocusBtn.addEventListener("click", closeModalWithPayment);
amountInput.addEventListener("input", changeAmount);
paymentMethods[0].addEventListener("click", openThanksModal);
paymentMethods[1].addEventListener("click", openThanksModal);
paymentMethods[2].addEventListener("click", openThanksModal);

function openPaymentModal() {
    dfInvitation.style.display = "none";
    dfBackdrop.style.display = "block";
    dfPayment.style.display = "inline-block";
};

function closeModalWithoutPayment() {
    dfInvitation.style.display = "inline-block";
    dfBackdrop.style.display = "none";
    dfPayment.style.display = "none";
    dfThanks.style.display = "none";
};

function closeModalWithPayment() {
    dfInvitation.style.display = "none";
    dfBackdrop.style.display = "none";
    dfPayment.style.display = "none";
    dfThanks.style.display = "none";
    dfFinal.style.display = "block";
};

function changeAmount() {
    const value = amountInput.value;
    const valueWithComma = value.replace(".",",");
    console.log(value.replace(".",","))
    paymentValue.textContent = value === "1" ? `${valueWithComma},00 €` : `${valueWithComma}0 €`;
}

function openThanksModal() {
    dfPayment.style.display = "none";
    dfThanks.style.display = "inline-block";
};
