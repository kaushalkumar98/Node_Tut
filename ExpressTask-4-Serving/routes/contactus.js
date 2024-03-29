const path = require('path');

const express  = require('express');

const rootDir = require('../util/path')

const router = express.Router();

router.get('/contact-us', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
});
 router.post('/success', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
    console.log(req.body);
 });

module.exports = router;