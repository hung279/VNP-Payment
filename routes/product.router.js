const router = require("express").Router();

router.get('/', (req, res, next) => {
    res.render('cart');
});

module.exports = router;