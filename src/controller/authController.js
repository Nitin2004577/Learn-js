import { max } from "date-fns/fp";
import authService from "../services/authService.js";
import { createJWT } from "../utils/jwt.js";


const login = async (req, res) => {
  const input = req.body;

  try {
    if (!input) {
      return res.status(400).send("Required data are missing.");
    }

    if (!input.email) {
      return res.status(400).send("Email is required.");
    }
    if (!input.password) {
      return res.status(400).send("Password is required.");
    }

    const data = await authService.login(input);

    // generate token
    const authToken = createJWT(data);
    res.cookie("authToken", authToken, { maxAge: 86400 * 1000 });

    // const result = await verifyJWT(authToken);

    // console.log(result);

    res.json(data);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const register = async (req, res) => {
  const input = req.body;

  try {
    if (!input.password) {
      return res.status(400).send("Password is required.");
    }

    if (!input.confirmPassword) {
      return res.status(400).send("Confirm Password is required.");

      if (input.password !== input.confirmPassword) {
        return res.status(400).send("Passwords do not match.");
      }
    }
    const userData = req.body; // Get data from request body

    const data = await authService.register(input); // Pass it to the service

    const authToken = createJWT(data);
    res.cookie("authToken", authToken, { maxAge: 86400 * 1000 });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data,
    });
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default { register, login };
