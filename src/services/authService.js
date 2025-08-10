import User from "../models/User.js";
import bcrypt from "bcryptjs";

const login = async (data) => {
  const user = await User.findOne({ email: data.email });
  if (!user) throw { statusCode: 404, message: "User not found." };

  const isPasswordMatch = bcrypt.compareSync(data.password, user.password);
  if (!isPasswordMatch)
    throw { statusCode: 400, message: "Incorrect email or password." };

  return {
    _id: user._id,
    name: user.name,
    address: user.address,
    email: user.email,
    password: "",
    phone: user.phone,
  };
};

const register = async (data) => {
  const hashedPassword = bcrypt.hashSync(data.password);

    const user = await User.findOne({ email: data.email });
  if (user) throw { statusCode: 409, message: "User already exists." };

  const registeredUser = await User.create({
    name: data.name,
    address: data.address,
    email: data.email,
    password: hashedPassword,
    phone: data.phone,
  });

  return {
    _id: registeredUser._id,
    name: registeredUser.name,
    address: registeredUser.address,
    email: registeredUser.email,
    password: "",
    phone: registeredUser.phone,
  };
};
export default { register, login };
