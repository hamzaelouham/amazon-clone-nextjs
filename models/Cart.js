import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    CartId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    products: [
      {
        id: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        category: {
          type: String,
          required: true,
        },
      },
    ],

    // modifiedOn: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
  { timestamps: true }
);

const Cart = mongoose.models.cart || mongoose.model("cart", CartSchema);

export default Cart;
