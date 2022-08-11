import React from "react";
import { Step, StepLabel, Stepper } from "@material-ui/core";

const stepsDetails = ["Shipping Address", "Payment Method", "Place Order"];

export default function PlaceOrder({ activeStep = 2 }) {
  const onSubmit = (e) => {
    e.preventDefault();
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
                <label className="label" htmlFor="fullname">
                  Full Name
                </label>
                <input className="a-input" type="text" name="fullname" />
              </div>
              <div className="from-group flex flex-col p-2 m-2">
                <label htmlFor="adress" className="label">
                  Adress
                </label>
                <input className="a-input" type="text" name="adress" />
              </div>
              <div className="from-group flex flex-col p-2 m-2">
                <label htmlFor="city" className="label">
                  City
                </label>
                <input className="a-input" type="text" name="city" />
              </div>
              <div className="from-group flex flex-col p-2 m-2">
                <label htmlFor="country" className="label">
                  Country
                </label>
                <input className="a-input" type="text" name="country" />
              </div>
              <div className="form-group flex flex-col p-2 m-2">
                <input
                  type="submit"
                  value="continue"
                  className="a-button-input"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
