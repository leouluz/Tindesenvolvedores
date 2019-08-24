const axios = require('axios');
const Dev = require('../models/Dev');

//Boas praticas é colocar apenas 5 metodos dentro de cada controller
//INDEX, STORE, UPDATE, DELETE, SHOW

module.exports = {

    async index(req, res) {
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({ // filtros para busca
            $and: [
                { _id: { $ne: user } }, // não aparece o usuario que esta logado
                { _id: { $nin: loggedDev.likes } }, // não aparece os usuario que dei like
                { _id: { $nin: loggedDev.deslikes } } // não aparece os usuarios que dei deslike
            ],
        })
        return res.json(users);
    },

    async store(req, res) {

        const { username } = req.body;

        const userExists = await Dev.findOne({ user: username });

        if (userExists) {
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url: avatar } = response.data;

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        })

        return res.json(dev);
    }
};