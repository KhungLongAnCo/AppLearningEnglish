const express = require('express');
const router = express.Router();
const index = require('../controllers/index');

/* GET home page. */
router.get('/', index.index);

module.exports = router;
