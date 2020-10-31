const router = require('express').Router();

router.get('/', (req,res) => { res.send('server testing') })

module.exports = router;