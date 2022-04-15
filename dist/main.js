"use strict";
console.log("Firing !!!!!!!!!!!!!!");
const order = {
    id: "fdjsnbse9445",
    amount: 100,
    currency: "USD",
};
const orderCard = {
    ...order,
    card: "Barclays",
    cvc: "045",
    type: "stripe",
};
function checkout(payload) {
    if (payload.type === "stripe") {
        console.log("Stripe");
    }
    else {
        console.log("Paypal");
    }
}
const transaction = checkout(orderCard);
