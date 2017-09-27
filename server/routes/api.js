const express = require('express');
const router = express.Router();
const ApiController = require('../controller/api');

router.route('/')
  .get(ApiController.hello);

module.exports = router;

