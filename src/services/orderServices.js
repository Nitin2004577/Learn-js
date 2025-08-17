import Order from "../models/Order.js"


const getOrders = async () => {
const orders = await Order.find().populate("orderItems.productId").populate("user", "name", "email", "address");
 return orders;
};

const createOrder = async (data, userId) =>  {

const orderNumber =    crypto.randomUUID();
    return await Order.create({...data, user: userId, orderNumber});
};

const deleteOrder = async (id) =>  {

const orderNumber =    crypto.randomUUID();
    return await Order.findByIdAndDelete(id);
};
export default { getOrders, createOrder, deleteOrder };

