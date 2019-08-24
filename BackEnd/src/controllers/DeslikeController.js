const Dev = require('../models/Dev');

module.exports = {

    async store(req, res) {
        const { user } = req.headers;
        const { devId } = req.params;

        const loggedDev = await Dev.findById(user); // encontrar o usuario logado
        const targetDev = await Dev.findById(devId); //O alvo, quem recebe like ou deslike

        if (!targetDev) {
            return res.status(400).json({ error: 'Dev not exists!' });
        }

        loggedDev.deslikes.push(targetDev._id); //logged dando like, likes é um vetor, e push adiciona informações ao vetor.

        await loggedDev.save();

        return res.json(loggedDev);
    }

}