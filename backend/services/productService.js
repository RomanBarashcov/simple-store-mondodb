
import fs from 'fs';

let repositories = null;

const getAllProducts = async (cat, searKeyword, sorOrder) => {
    try {

        const products = await repositories.productRepository.findAllProducts(cat, searKeyword, sorOrder);
        return products;

    } catch (err) {
        console.log(err);
        throw err;
    }
}

const getProductById = async (productId) => {
    try {

        const product = await repositories.productRepository.findProductById(productId);
        if(!product) throw "Product not found!";

        return product;

    } catch (err) {
        console.log(err);
        throw err;
    }
}

const addProduct = async (newProductData) => {
    try {

        const createResult = await repositories.productRepository.createProduct(newProductData)
        return createResult;

    } catch (err) {
        console.log(err);
        throw err;
    }
}

const assignImageToProduct = async (productId, path) => {
    try {

        const product = await repositories.productRepository.findProductById(productId);
        if(!product) throw 'Error in UpdateImage. Product not faund!';

        if(product.image) {
            //remove old image from folder by path
          fs.unlinkSync(path.slice(0,15) + product.image);
        }

        product.image = path.slice(15);
        const updateProductResult = await repositories.productRepository.saveProduct(product);

        return updateProductResult;

    } catch (err) {
        console.log(err);
        throw err;
    }
};

const updateProduct = async (productId, newProductData) => {
    try {

        const product = await repositories.productRepository.findProductById(productId);
        if(!product) throw "Product not found!";

        product.title = newProductData.title;
        product.price = newProductData.price;
        product.category = newProductData.category;
        product.countInStock = newProductData.countInStock;
        product.description = newProductData.description;

        const updatedProduct = await repositories.productRepository.saveProduct(product);
        if (!updatedProduct) throw "Error in Updating Product.";

        return updatedProduct;

    } catch (err) {
        console.log(err);
        throw err;
    }
}

const removeProduct = async (productId) => {
    try {

        const product = await repositories.productRepository.findProductById(productId);
        if(!product) throw "Product not found!";

        const removeResult = await repositories.productRepository.removeProduct(product);
        return removeResult;

    } catch (err) {
        console.log(err);
        throw err;
    }
}

module.exports = (rep) => {

    repositories = rep;

    return {
        getAllProducts,
        getProductById,
        addProduct,
        assignImageToProduct,
        updateProduct,
        removeProduct
    }

}