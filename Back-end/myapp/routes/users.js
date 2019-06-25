const express = require('express');
const router = express.Router();
const users = require('../controllers/users');

/* GET users listing. */
router.get('/', users.users);
router.get('/:id', users.FindUser);
router.post('/', users.newUser);
router.delete('/', users.DeleteUser);


module.exports = router;
