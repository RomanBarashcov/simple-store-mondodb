let repositories = null;

const makeOrder = async (order) => {
    try {

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
        makeOrder
    }
}