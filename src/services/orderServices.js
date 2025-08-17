import Order from "../models/Order.js"


const getOrders = async () => {
const orders = await Order.find();
 return orders;
};

const createOrder = async (data, userId) =>  {

const orderNumber =    crypto.randomUUID();
    return await Order.create({...data, userId, orderNumber});
}
export default { getOrders, createOrder };
   
