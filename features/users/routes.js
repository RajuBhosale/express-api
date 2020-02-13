/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const { checkSchema, validationResult } = require('express-validator');


const userService = require('./services');
const { getUserByEmailSchema, createUserSchema } = require('./validations');

router.get('/',
    checkSchema(getUserByEmailSchema),
    async function(req, res, next) {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      try {
        const result = await userService.get(req.query.email);
        res.send(result);
      } catch (error) {
        return next(error);
      }
    });

router.post('/', checkSchema(createUserSchema), async function(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  try {
    const { email } = req.body;
    const result = await userService.create({ email });
    res.send(result);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
