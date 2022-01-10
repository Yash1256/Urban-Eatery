import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51JcuhISGB0D7iDI7jw9tGlexVp6yfo2tHCWAAixxlTbJIwWkcAuLbSPtjO86luiT33VkE3sPT3pj45nblCfSaQUZ00CC2vF2WL";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
