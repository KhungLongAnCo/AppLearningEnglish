const Users = require('../models/users');

module.exports = {
    users: (req, res, next) => {
        Users.find({})
            .then(users => {
                res.status(200).json(users)
            })
            .catch(err => {
                next(err);
            })
    },
    newUser: (req, res, next) => {
        const mewUser = new Users(req.body);
        mewUser.save()
            .then(users => {
                res.status(201).json(users);
            })
            .catch(err => {
                next(err);
            })
    }
}