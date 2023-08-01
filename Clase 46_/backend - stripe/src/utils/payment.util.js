const Stripe = require("stripe");

class PaymentService {
  constructor() {
    this.stripe = new Stripe("YOUR STRIPE SECRET KEY");
  }

  createPaymentIntent = async (data) => {
    const paymentIntent = this.stripe.paymentIntents.create(data);
    return paymentIntent;
  };
}

module.exports = PaymentService;
