import { verify } from "jsonwebtoken";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    avatar: {
      type: String,
      default: "https://i.ibb.co/4pDNDk1/avatar.png",
    },
    mobile: {
      type: Number,
      default: null,
    },
    //   refreshToken: {
    //     type: String,
    //     default: null,
    //   },
    verifyEmail: {
      type: Boolean,
      default: false,
    },
    lastLoginDate: {
      type: Date,
      default: null,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "blocked"],
      default: "active",
    },
    addressDetails: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "address",
      },
    ],
    shoppingCart: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "cartProduct",
      },
    ],
    orderHistory: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "order",
      },
    ],
    forgotPasswordOtp: {
      type: String,
      default: null,
    },
    forgotPasswordExpires: {
      type: Date,
      default: null,
    },
    role: {
      type: String,
      enum: ["user", "admin"], 
      default: "user",
    },
  },
  {
    timeStamps: true,
  }
);

const UserModel = mongoose.model("User", userSchema);
export default UserModel;
