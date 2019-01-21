var express = require('express');
var router = express.Router();

let count = 0;

/* GET users listing. */
router.get('/get', function(req, res, next) {
  let data = count + '';
  res.send(data);
});

router.get('/add', function(req, res, next) {
    count++;
    let data = count + '';
    res.send(data);
});

module.exports = router;
