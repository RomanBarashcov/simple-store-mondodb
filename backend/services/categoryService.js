let repositories = null;

const getAllCategories = async () => {
    try{

        const categories = await repositories.categoryRepository.findAllCategories();
        return categories;
        
    } catch (err) {
        console.log(err)
        throw err;
    }
};

module.exports = (rep) => {

    repositories = rep;

    return { 
        getAllCategories
    }
}