import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email is already exists"], // If its fails it displays Email is already exists
    required: [true, "Email is Required"],
  },
  username: {
    type: String,
    unique: [true, "Username already exists"],
    required: [true, "Username is required"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username is invalid, it should contain 8-20 alphanumeric characters and be unique!",
    ],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    match: [
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Password is invalid, it should contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character!",
    ],
  },
});

// We add this when we're working with regular expressions.
// First it check whether the User model is already in that models. Else it will create the User Object.
const User = models.User || model("User", UserSchema);

export default User;
