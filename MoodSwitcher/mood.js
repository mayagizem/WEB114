// Maya Celikcan - November 20, 2026

//  Select the HTML elements.
const quote = document.querySelector("#quote");
const title = document.querySelector("#title");
const buttons = document.querySelector("#buttons");

// Store the settings for each mood.
const moods = {
  happy: {
    name: "Happy",
    bg: "#FFD700",
    text: "#8B197E",
    message: "Warm smiles and the sun's kisses!"
  },
  calm: {
    name: "Calm",
    bg: "#B2DFDB",
    text: "#164B47",
    message: "Take a deep breath and relax."
  },
  angry: {
    name: "Angry",
    bg: "#B71C1C",
    text: "#FFFFFF",
    message: "Take a moment to cool down."
  },
  sleepy: {
    name: "Sleepy",
    bg: "#283149",
    text: "#E6E6FA",
    message: "Time to rest and recharge."
  }
};

// Change the page when a mood button is clicked.
function handleMoodButtonClick(moodClick) {
  if (moodClick.target.classList.contains("mood-btn")) {
    const mood = moodClick.target.getAttribute("data-mood");
    const moodSettings = moods[mood];

    document.body.style.backgroundColor = moodSettings.bg;
    document.body.style.color = moodSettings.text;
    quote.textContent = moodSettings.message;
    title.textContent = moodSettings.name;

    console.log("Mood selected:", mood);
    console.log("Mood settings:", moodSettings);
  }
}

// Listen for clicks on the parent container.
buttons.addEventListener("click", handleMoodButtonClick);
