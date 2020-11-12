const router = require('express').Router();
const axios = require('axios');

router.get('/', (req,res) => { res.send('server testing') })

// Test our apiRoute with jokeGenerator Api
router.get('/joke', (req, res) => {
    axios({
        type: "GET",
        url: 'https://official-joke-api.appspot.com/jokes/programming/random'
    }).then( function(response) {
        // console.log(response.data)
        console.log(response.data[0].setup)
        console.log(response.data[0].punchline)
        res.send([response.data[0].setup , response.data[0].punchline ])
    })
})

module.exports = router;