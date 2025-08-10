import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User name is required."],
  },
  email: {
    type: String,
    required: [true, "User email is required."],
    trim: true,
    lowercase: true,
    validate: {
      validator: (value) => {
        const emailRegex =
          /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
        return emailRegex.test(value);
      },
      message: "Invalid email address.",
    },
  },
  password: {
    type: String,
    required: [true, "User password is required."],
    minlength: [6, "Password length must be greater than 6."],
    // select: false,
  },
  roles: {
    type: [String],
    default: ["USER"],
    enum: ["USER", "ADMIN", "MERCHANT"],
  },
  address: {
    city: {
      type: String,
      required: [true, "User city address is required."],
    },
    country: {
      type: String,
      default: "Nepal",
    },
    province: {
      type: String,
      required: [true, "User province is required."],
    },
    street: {
      type: String,
    },
  },
  phone: {
    type: String,
    required: [true, "User phone number is required."],
    unique: true,
  },
  profileImageUrl: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now, // function reference, not call
    immutable: true,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
