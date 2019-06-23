const express = require('express');
const router = express.Router();
const users = require('../controllers/users');

/* GET users listing. */
router.get('/', users.users);
router.post('/', users.newUser);


module.exports = router;
