const express = require('express');

const router = express.Router();

router.get('/', async function(req, res, next) {
  try {
    const { num } = req.query;
    const result = num ** 2;
    res.status(200).json(result);
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
