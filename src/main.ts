console.log("Firing !!!!!!!!!!!!!!");

interface Order {
  id: string;
  amount: number;
  currency: string;
}

interface Stripe {
  card: string;
  cvc: string;
  type: "stripe";
}

interface PayPal {
  email: string;
  type: "paypal";
}

type CheckoutCard = Order & Stripe;

type CheckoutPayPal = Order & PayPal;

const order: Order = {
  id: "fdjsnbse9445",
  amount: 100,
  currency: "USD",
};

const orderCard: CheckoutCard = {
  ...order,
  card: "Barclays",
  cvc: "045",
  type: "stripe",
};

type Payload = CheckoutCard | CheckoutPayPal;

function checkout(payload: Payload) {
  if (payload.type === "stripe") {
    console.log("Stripe");
  } else {
    console.log("Paypal");
  }
}

const transaction = checkout(orderCard);
