/* 
TASKS 
- Adnan - DOM reference
- Adnan - css/html jokes
- Micky - reveal btn add event listener
- Herman- next btn add event listener
- Herman - create fn to invoke fn 
*/

const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')
const revealBtn = document.querySelector('#submit')
const displayedText = document.querySelector('#displayText')
let punchlineTxt;
let setupTxt;

// invoke function and gets joke from API
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

nextBtn.addEventListener('click', () => {
    getJoke()
})
