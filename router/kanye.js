const express = require('express');

const router = express.Router();
const { handleGetKanyeQuote } = require('../controllers/kanye');

router.get('/', async function(_, res, next) {
  try {
    const result = await handleGetKanyeQuote();
    res.status(200).json(result);
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
