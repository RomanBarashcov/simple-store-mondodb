import Category from '../models/categoryModel';

const findAllCategories = async () => {
    try {

        const categories = await Category.find({});
        return categories;

    } catch (err){
        console.log(err)
    }
}

module.exports = {
    findAllCategories
}