const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')
const revealBtn = document.querySelector('#submit')
const displayedText = document.querySelector('#displayText')
let punchlineTxt;
let setupTxt;

//DB 
let storedJokes = [];
let count; // num

// get joke from API
getJoke()

function getJoke () {    
    prevBtn.classList.remove('displayNone') 
    
    axios.get('./api/joke')
    .then(res => {
        console.log(res.data)
        storedJokes.push(res.data)
        count = storedJokes.length - 1;
        if (count === 0) {
            prevBtn.classList.add('displayNone')
        }
        punchlineTxt = res.data.jokePunchline;
        setupTxt = res.data.jokeSetup;
        displayedText.textContent = setupTxt;
    })
    .catch(err => console.error(err))
}

// reveal joke
revealBtn.addEventListener('click', () => {
    displayedText.textContent = punchlineTxt;
})

// get new joke
nextBtn.addEventListener('click', getJoke)

prevBtn.addEventListener('click', () => {
    if (count === 0) return;

    count--;

    if (count === 0) {
        prevBtn.classList.add('displayNone')
    }

    punchlineTxt = storedJokes[count].jokePunchline;
    setupTxt = storedJokes[count].jokeSetup;
    displayedText.textContent = setupTxt;

    console.log(count, storedJokes[count])
})