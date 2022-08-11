export const saveAddress = (address) => {
  return { type: "SAVE_SHIPPING_ADDRESS", payload: address };
};

export const paymentMethod = (pay) => {
  return { type: "SAVE_PAYMENTS_METHOD", payload: pay };
};
