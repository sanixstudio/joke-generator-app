// DOM Elements
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const revealBtn = document.querySelector("#submit");
const displayedText = document.querySelector("#displayText");
let punchlineTxt;
let setupTxt;

// Declare initial state
let savedJokes = [];
let count; // num

// Get jokes
fetchJoke();

// reveal joke
revealBtn.addEventListener("click", () => {
  displayedText.textContent = punchlineTxt;
  revealBtn.classList.add("displayNone");
});

// get new joke
nextBtn.addEventListener("click", fetchJoke);

prevBtn.addEventListener("click", () => {
  if (count === 0) return;

  count--;

  if (count === 0) {
    prevBtn.classList.add("displayNone");
  }

  punchlineTxt = savedJokes[count].jokePunchline;
  setupTxt = savedJokes[count].jokeSetup;
  displayedText.textContent = setupTxt;
  revealBtn.classList.remove("displayNone");
});

// function to get jokes from API
function fetchJoke() {
  prevBtn.classList.remove("displayNone");

  axios
    .get("./api/joke")
    .then((res) => {
      console.log(res.data);
      savedJokes.push(res.data);
      count = savedJokes.length - 1;
      if (count === 0) {
        prevBtn.classList.add("displayNone");
      }
      punchlineTxt = res.data.jokePunchline;
      setupTxt = res.data.jokeSetup;
      displayedText.textContent = setupTxt;
      revealBtn.classList.remove("displayNone");
    })
    .catch((err) => console.error(err));
}
