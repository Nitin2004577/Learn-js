import User from "../models/User.js";
import bcrypt from "bcryptjs";

const register = async (data) => {
    // if(!data)
  const hashedPassword = bcrypt.hashSync(data.password);

  return await User.create({
    name: data.name,
    address: data.address,
    email: data.email,
    password: "",
    phone: data.phone,
  });
};
export default { register };
