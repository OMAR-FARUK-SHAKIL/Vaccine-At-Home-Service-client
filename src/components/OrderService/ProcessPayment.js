import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// import {CardElement} from '@stripe/react-stripe-js';
import SimpleCardForm from "./SimpleCardForm";
import SplitCardForm from "./SplitCardForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51IeIsAJa9drZDaF4ymjV6lhSR9dOjz7AdEtJudg171aZ4VcdojYNRvapavBbSgLgIn960USsSCpj965jr8mcm8US008TH45b4a"
);

const ProcessPayment = () => {
  return (
    <Elements stripe={stripePromise}>
    <h2 className="text-center mt-5">Complete your payment:</h2>
        <SimpleCardForm></SimpleCardForm>
        {/* <SplitCardForm handlePayment={handlePayment}></SplitCardForm> */}

    </Elements>
  );
};

export default ProcessPayment;
