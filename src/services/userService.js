import User from "../models/User.js";

const createUser = async (data) => await User.create(data);
const getUsers = async () => {
    const users = await User.find();

    return users;
};

const getUserById = async (id) => {
const Users = await User.findById();
};

export default {
    createUser,
    getUsers,
    getUserById
};