let repositories = null;

const addCommentToProduct = async (productId, comment) => {
    try {

        let product = await repositories.productRepository.findProductById(productId);
        if(!product) throw "Error in add new comment. Product not faund!";

        product = numRevAndRaitingCalcExecute(product, comment);

        const result = await repositories.productRepository.addProductComment(product, comment);
        return result;

    } catch (err) {
        console.log(err)
        throw err;
    }
}

const numRevAndRaitingCalcExecute = (product, comment) => {
    try {

        const numReviews = product.comments.length + 1;
        const rating = (product.comments.reduce((acc, com) => acc + com.rating, 0) + comment.rating) / numReviews;

        product.numReviews = numReviews;
        product.rating = rating;

        return product;

    } catch (err) {
        console.log(err)
        throw err;
    }
}

const updateComment = async (productId, comment) => {
    try {

        let product = await repositories.productRepository.findProductById(productId);
        if(!product) throw "Error in update comment. Product not faund!";

        const result = await repositories.productRepository.updateProductComment(comment);
        return result;

    } catch (err) {
        console.log(err)
        throw err;
    }
}

const deleteComment = async (productId, commentId) => {
    try {

        const result = await repositories.productRepository.removeComment(productId, commentId);
        return result;

    } catch (err) {
        console.log(err)
        throw err;
    }
}

module.exports = (rep) => {
    
    repositories = rep;

    return {
        addCommentToProduct,
        updateComment,
        deleteComment
    }


}