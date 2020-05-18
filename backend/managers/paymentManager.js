let repositories = null;

const makePayment = async (orderId, paymantData) => {
    try {

        let order = await repositories.orderRepository.findOrderById(orderId);
        if (!order) throw 'Error in make payment. Incorrect data payload!'

        order.isPaid = true;
        order.paidAt = Date.now();
        order.payment = {
            paymentMethod: 'paypal',
            paymentResult: {
            payerID: paymantData.payerID,
            orderID: paymantData.orderID,
            paymentID: paymantData.paymentID
            }
        }

        const saveResult = repositories.orderRepository.saveOrder(order);
        return saveResult;

    } catch (err) {
        console.log(err);
        throw err;
    }
}

module.exports = (rep) => {

    repositories = rep;

    return {
        makePayment
    }
}