const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')
const revealBtn = document.querySelector('#submit')
const displayedText = document.querySelector('#displayText')
let punchlineTxt;
let setupTxt;

// get joke from API
getJoke()

function getJoke(){
    axios.get('./api/joke')
    .then(res => {
        console.log(res.data)
        punchlineTxt = res.data.jokePunchline
        setupTxt = res.data.jokeSetup
        displayedText.textContent = setupTxt
    })
    .catch(err => console.error(err))
}

// reveal joke
revealBtn.addEventListener('click', () => {
    displayedText.textContent = punchlineTxt;
})

// get new joke
nextBtn.addEventListener('click', () => {
    getJoke()
})
