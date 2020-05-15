import Product from '../models/productModel';

const findAllProducts = async (cat, searKeyword, sorOrder) => {
    try {

        const category = cat ? { category: cat } : {};

        const searchKeyword = searKeyword ? {
            title: {
                $regex: searKeyword,
                $options: 'i'
            }
        } : {};

        const sortOrder = sorOrder ? (sorOrder === 'lowest' ? { price: 1 } : { price: -1 }) : { _id: -1 };

        let products = await Product.find({ ...category, ...searchKeyword }).sort(sortOrder);
        return products;

    } catch (err){
        console.log(err)
    }
}

const findProductById = async (productId) => {
    try {

        const product = await Product.findOne({ _id: productId }).populate("comments.user");
        return product;

    } catch (err){
        console.log(err)
    }
}

const addProductComment = async (product, comment) => {
    try {

        const updateResult = await Product.updateOne({ _id: product._id }, {
            numReviews: product.numReviews,
            rating: product.rating,
            $push: { 
                comments: { 
                    rating: comment.rating, 
                    text: comment.text, 
                    user: comment.user 
                  } 
              } 
          });

        return updateResult;

    } catch (err){
        console.log(err)
    }  
}

const updateProductComment = async (comment) => {
    try {

        let updateResult = await Product.updateOne({ 'comments._id' : comment._id }, { 
            '$set': { 
                  'comments.$.raiting': comment.raiting,
                  'comments.$.text': comment.text
              }
          });

          return updateResult;

    } catch (err){
        console.log(err)
    }
}

const saveProduct = async (product) => {
    try {

        const saveProduct = product.save();
        return saveProduct;

    } catch (err){
        console.log(err)
    }
}

const removeProduct = async (product) => {
    try {

        const removeProduct = product.remove();
        return removeProduct;

    } catch (err){
        console.log(err)
    }
}

const removeComment = async (productId, commentId) => {
    try {

        let removeResult = await Product.updateOne({ _id: productId }, { 
            $pull: { 
              'comments': { _id: commentId } 
            } 
          });

        return removeResult;

    } catch (err){
        console.log(err)
    }
}

module.exports = {
    findAllProducts,
    findProductById,
    addProductComment,
    updateProductComment,
    saveProduct,
    removeProduct,
    removeComment
}