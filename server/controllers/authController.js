const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const { name, password } = req.body;
        const db = req.app.get('db');

        const result = await db.check_trainers([name])
        const existingUser = result[0];

        if (existingUser) {
            return res.status(409).send(`${name} is already taken`)
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const registeredUser = await db.register_trainer([name, hash])
        const user = registeredUser[0];

        req.session.user = user;
        return res.status(201).send(req.session.user);
    },

    login: async (req, res) => {
        const { name, password } = req.body;
        const db = req.app.get('db');

        const foundUser = await db.check_trainers([name]);
        const user = foundUser[0];
        if (!user) {
            return res.status(401).send(`${name} not found. Please register as a new user before attempting to login`)
        }

        const isAuthenticated = bcrypt.compareSync(password, user.password)
        if (!isAuthenticated) {
            return res.status(403).send('Incorrect Password.')
        }

        req.session.user = user
        res.status(200).send(req.session.user);

    },
    logout: async (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}