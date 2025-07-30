import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    orderId: {
      type: String,
      required: [true, "Please add an orderId"],
      unique: true,
    },
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
    productDetails: {
      name: String,
      image: Array,
    },
    paymentId: {
      type: String,
      default: null,
    },
    paymentStatus: {
      type: String,
      default: null,
    },
    deliveryAddress: {
      type: mongoose.Schema.ObjectId,
      ref: "Address",
    },
    subTotalAmount: {
      type: Number,
      default: 0,
    },
    totalAmount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const OrderModel = mongoose.model("Order", orderSchema);
export default OrderModel;
