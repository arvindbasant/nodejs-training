var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:userId', function (req, res, next) {
  console.log(req.params.userId);
  res.send({ "user": { "firstName": "basant", "lastName": "kumar", "role": 234 } });
});

module.exports = router;
