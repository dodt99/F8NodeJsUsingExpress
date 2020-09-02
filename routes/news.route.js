const express = require('express');
const router = express.Router();

const newsController = require('../controllers/news.controller');

router.use('/:slug', newsController.show );
router.use('/', newsController.index );

module.exports = router;