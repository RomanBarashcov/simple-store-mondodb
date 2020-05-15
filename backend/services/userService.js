import { getToken } from '../util';
let repositories = null;

const updateUser = async (userId, data) => {
    try {

        let user = await repositories.userRepository.findUserById(userId);
        if(!user) throw "User not faund";

        user.name = data.name;
        user.email = data.email;
        user.password = data.password;

        const updatedUser = await repositories.userRepository.updateUser(user);

        return { 
            _id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: getToken(updatedUser) 
        };

    } catch (err) {
        console.log(err)
        throw err;
    }
}

module.exports = (rep) => {

    repositories = rep;

    return {
        updateUser
    }
}