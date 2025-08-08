import authService from "../services/authService.js";

const register = async (req, res) => {
try {
    const data = await authService.register();

    res.status(201).json(data);
}catch (error)  {
    res.status(500).send(error.message);
}
};

export default{register};