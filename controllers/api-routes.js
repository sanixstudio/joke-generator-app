const router = require('express').Router();
const axios = require('axios');

// Test our apiRoute with jokeGenerator Api
router.get('/joke', (req, res) => {
    axios({
        type: "GET",
        url: 'https://official-joke-api.appspot.com/jokes/programming/random'
    })
    .then( response => {
        // console.log(response.data)
        console.log(response.data[0].setup)
        console.log(response.data[0].punchline)
        // res.send([response.data[0].setup , response.data[0].punchline])
        res.json({ 
            'jokeSetup': response.data[0].setup ,
            'jokePunchline': response.data[0].punchline
        })
    })
    .catch(err => console.error(err))
})

module.exports = router;