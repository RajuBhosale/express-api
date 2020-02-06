/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();

const userService = require('../services/user');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const result = await userService.get(req.query.email);
    res.send(result);
  } catch (error) {
    res.sendStatus(500).send(error.message);
  }
});

router.post('/', async function(req, res, next) {
  try {
    const { email } = req.body;
    const result = await userService.create({ email });
    res.send(result);
  } catch (error) {
    // res.sendStatus(500).send(error.message);
    return next(error);
  }
});

module.exports = router;
