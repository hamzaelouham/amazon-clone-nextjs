import React, { useState, useEffect } from "react";
import {
  Step,
  StepLabel,
  Stepper,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

import { useDispatch } from "react-redux";
import { paymentMethod } from "../../redux/actions/checkoutActions";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
const stepsDetails = ["Shipping Address", "Payment Method", "Place Order"];

export default function Payments({ activeStep = 1 }) {
  const [radio, setRadio] = useState("paypal");
  const shipping = useSelector((state) => state.cart.shippingAdress);
  const dispatch = useDispatch();
  const router = useRouter();

  const RadioChange = (e) => {
    setRadio(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(paymentMethod(radio));
    router.push("/checkout/place-order");
  };

  const goBack = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <div className="mt-3">
      <Stepper activeStep={activeStep} alternativeLabel>
        {stepsDetails.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <div className=" flex items-center  w-full justify-center bg-white">
          <div className="a-row-1 a-border mx-auto md:max-w-sm md:mx-auto">
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="from-group flex flex-col p-2 m-2">
                <RadioGroup
                  aria-label="payments"
                  defaultValue="paypal"
                  name="radio-buttons-group"
                  value={radio}
                  onChange={(e) => RadioChange(e)}
                >
                  <FormControlLabel
                    value="paypal"
                    control={<Radio />}
                    label="paypal"
                  />
                  <FormControlLabel
                    value="strip"
                    control={<Radio />}
                    label="strip"
                  />
                  <FormControlLabel
                    value="card"
                    control={<Radio />}
                    label="debit  card"
                  />
                </RadioGroup>
              </div>

              <div className="form-group flex flex-row a-justify-between  p-2 m-2">
                <input
                  type="submit"
                  value="continue"
                  className="a-button-input"
                />
                <button
                  onClick={(e) => goBack(e)}
                  className="a-button-input-primary"
                >
                  Back
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
