import { getToken } from '../util';
let repositories = null;

const signIn = async (email, password) => {
    try {

        const user = await repositories.userRepository.findByEmailAndPassword(email, password);
        if(!user) throw "Invalid Email or Password.";

        return { 
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: getToken(user) 
        } 

    } catch (err) {
        console.log(err);
        throw err;
    }
}

const register = async (name, email, password) => {
    try {

        let user = await repositories.userRepository.findByEmail(email);
        if(user) throw "An account with this email already exists!"

        const newUser = {name, email, password};
        const newUserResult = await repositories.userRepository.addUser(newUser);

        return {
            _id: newUserResult.id,
            name: newUserResult.name,
            email: newUserResult.email,
            isAdmin: newUserResult.isAdmin,
            token: getToken(newUserResult)
        }

    } catch (err) {
        console.log(err);
        throw err;
    }
}

module.exports = (rep) => {
    
    repositories = rep;

    return {
        signIn,
        register
    }
}