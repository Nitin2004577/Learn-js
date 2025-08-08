import authService from "../services/authService.js";

const register = async (req, res) => {
const input = req.body;


  try {
    if(!input.password) {
  return res.
}
    const userData = req.body; // Get data from request body

    const data = await authService.register(input); // Pass it to the service

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export default { register };
