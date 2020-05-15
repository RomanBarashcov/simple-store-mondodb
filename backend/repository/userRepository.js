import User from '../models/userModel';

const findUserById = async (userId) => {
    try {

        const user = await User.findById(userId);
        return user;

    } catch (err){
        console.log(err)
    }
}

const findByEmailAndPassword = async (email, password) => {
    try {

        const user = await User.findOne({
                            email: email,
                            password: password
                        });

        return user;

    } catch (err){
        console.log(err)
    }
}

const findByEmail = async (email) => {
    try {

        const user = await User.findOne({
                        email: email
                    });

        return user;

    } catch (err){
        console.log(err)
    }
}

const addUser = async (user) => {
    try {

        const newUser = new User(user);
        const createResult = await newUser.save();
        return createResult;

    } catch (err){
        console.log(err)
    }
}

const updateUser = async (user) => {
    try {

        const saveResult = await user.save();
        return saveResult;

    } catch (err){
        console.log(err)
    }
}

module.exports = {
    findUserById,
    findByEmailAndPassword,
    findByEmail,
    addUser,
    updateUser
}