import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: [true, "Name is required!"] },
    username: {
      type: String,
      required: [true, "Username is required!"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required!"],
      unique: true,
    },
    password: { type: String, required: [true, "Password is required!"] },
  },
  {
    timestamps: true,
  }
);

export const userCollection = model("users", userSchema);
