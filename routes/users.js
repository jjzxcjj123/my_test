var express = require('express');
var router = express.Router();

let count = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  count++;
  let data = {'data':'test','count':`${count}`};
  res.send(JSON.stringify(data));
});

module.exports = router;
