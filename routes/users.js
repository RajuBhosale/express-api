/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();

const User = require('../models/User');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const result = await User.query().where('email', 'Sylvester@eamil.com');
    res.send(result);
  } catch (error) {
    res.sendStatus(error);
  }
});

module.exports = router;
