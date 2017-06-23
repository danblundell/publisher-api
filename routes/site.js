var express = require('express');
var router = express.Router();

// home page
router.get('/', (req, res) => {
    res.send('Home.');
});

module.exports = router;