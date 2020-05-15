import Order from '../models/orderModel';

const findAllOrders = async () => {
    try {

        const orders = await Order.find({}).populate('user');
        return orders;

    } catch (err) {
        console.log(err);
    }
}

const findAllOrdersByUser = async (userId) => {
    try {

        const orders = await Order.find({ user: userId });
        return orders;

    } catch (err) {
        console.log(err);
    }
}

const findOrderById = async (orderId) => {
    try {

        const order = await Order.findOne({ _id: orderId });
        return order;

    } catch (err) {
        console.log(err);
    }
}

const saveOrder = async (order) => {
    try {

        const newOrder = new Order(order);
        const newOrderSaved = await newOrder.save();
        return newOrderSaved;

    } catch (err) {
        console.log(err);
    } 
}

module.exports = {
    findAllOrders,
    findAllOrdersByUser,
    findOrderById,
    saveOrder
}
