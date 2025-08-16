import orderServices from "../services/orderServices.js";
const getOrders = async (req, res) => {
  try {
    const data = await orderServices.getOrders();
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createOrders = async (req, res) => {
  try {
    const data = await orderServices.createOrders(req.body);
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export default { getOrders, createOrders };
