let repositories = null;

const getAllOrders = async () => {
    try {

        const orders = await repositories.orderRepository.findAllOrders();
        return orders;

    } catch (err) {
        console.log(err)
        throw err;
    }
}

const getUserOrders = async (userId) => {
    try {

        const orders = await repositories.orderRepository.findAllOrdersByUser(userId);
        return orders

    } catch (err) {
        console.log(err)
        throw err;
    }
}

const getOrderById = async (orderId) => {
    try {

        const order = await repositories.orderRepository.findOrderById(orderId);
        if(!order) throw "Order Not Found.";
        
        return order

    } catch (err) {
        console.log(err)
        throw err;
    }
}

const deleteOrder = async (orderId) => {
    try {

        const order = await repositories.orderRepository.findOrderById(orderId);
        if(!order) throw "Order Not Found.";

        const result = await repositories.orderRepository.removeOrder(order);
        return result;

    } catch (err) {
        console.log(err)
        throw err;
    }
};

module.exports = (rep) => {

    repositories = rep;

    return {
        getAllOrders,
        getUserOrders,
        getOrderById,
        deleteOrder
    }

}