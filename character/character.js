// Created by Maya on October 16, 2026

// Step 1: Show a welcome message.
alert(`Welcome to the Adventure Realm! Let's create your hero!`);

// Step 2: Ask for the character's name and store the answer.
const characterName = prompt(`What is your character's name?`);

// Step 3: Insert the character's name into the pet question.
// "dragon" is the default answer in the input box.
const pet = prompt(
  `What kind of pet does ${characterName} have? (dragon, wolf, robot, unicorn, phoenix, etc.)`,
  "dragon"
);

// Step 4: Ask for the character's superpower.
const superpower = prompt(
  `What is ${characterName}'s special superpower?`
);

// Step 5: OK returns true, and Cancel returns false.
const likesFighting = confirm(
  `Does ${characterName} like fighting monsters?
Click OK for YES
Click Cancel for NO`
);

// Step 6: Show a message before displaying the story.
alert(`Gathering magic for ${characterName}... almost ready!`);

// Step 7: Display the answers and a short story.
// The conditional operator changes true/false into "Yes" or "No".
alert(`Your Adventure Hero
====================================
Name: ${characterName}
Pet: ${pet}
Superpower: ${superpower}
Monster fighter? ${likesFighting ? "Yes" : "No"}

In a faraway land, ${characterName} travels with a loyal ${pet}.
Together, they use the incredible power of ${superpower} to protect their village!
====================================`);