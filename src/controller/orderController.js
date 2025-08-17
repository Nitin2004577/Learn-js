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
  const input = req.body;
  if (!input.orderItems || !input.orderItems.length) {
    return res.status(400).send("Order items are required");
  }
  try {
    const data = await orderServices.createOrders(req.body, req.user);
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteOrderOrders = async (req, res) => {
  const input = req.body;
  if (!input.orderItems || !input.orderItems.length) {
    return res.status(400).send("Order items are required");
  }
  try {
    await orderServices.deleteOrder(req.params.id);
    res.send("Order deleted successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default { getOrders, createOrders , deleteOrderOrders };
