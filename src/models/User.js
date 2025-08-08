import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "user name is required."],
  },
  email: {
    type: String,
    required: [true, "user email is required."],
    trim: true,
    lowercase: true,
    validate: {
      validator: (value) => {
        const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

        return emailRegex.test(value);
      },
      message: "Invalid email address.",
    },
  },
  password: {
    type: String,
    required: [true, "User Password is required."],
    minlength: [6, "Password length must be greater 6."],
  },
  roles: {
    type: [String],
    default: ["USER"],
    enum: ["USER"],
  },
});

const model = mongoose.model("User", userSchema);
export default model;
