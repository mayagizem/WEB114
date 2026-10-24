"use strict";
// Maya Celikcan - October 23, 2026

/* PLANNING / PSEUDOCODE
1. Start the score at 0.
2. Ask 5 + 3. Store the answer as a number in addition.
   Check if it is strictly equal to 8.
3. Ask 10 - 4. Store the answer as a number in subtraction.
   Check if it is strictly equal to 6.
4. Ask 4 * 3. Store the answer as a number in multiplication.
   Check if it is strictly equal to 12.
5. Ask 20 / 5. Store the answer as a number in division.
   Check if it is strictly equal to 4.
6. Ask which country I am from. The answer is Turkey.
   Check for Cancel first, then trim spaces and check for an empty answer.
   Change the text to lowercase and compare it with "turkey".
7. For each correct answer, add 1 point and show correct feedback.
   Otherwise, show incorrect feedback without adding a point.
8. Calculate the percentage using (score / 5) * 100.
9. If the score is 3, log a special message in the console.
10. Show performance feedback: 5 is excellent, 3 or 4 is good,
    and 0, 1, or 2 needs more practice.
11. Show the final score and percentage.
*/

let score = 0;

// Question 1
const addition = Number(prompt("Question 1: What is 5 + 3?"));
if (addition === 8) {
    score = score + 1;
    alert("Correct! You earned 1 point.");
} else {
    alert("Incorrect. The correct answer is 8.");
}

// Question 2
const subtraction = Number(prompt("Question 2: What is 10 - 4?"));
if (subtraction === 6) {
    score = score + 1;
    alert("Correct! You earned 1 point.");
} else {
    alert("Incorrect. The correct answer is 6.");
}

// Question 3
const multiplication = Number(prompt("Question 3: What is 4 * 3?"));
if (multiplication === 12) {
    score = score + 1;
    alert("Correct! You earned 1 point.");
} else {
    alert("Incorrect. The correct answer is 12.");
}

// Question 4
const division = Number(prompt("Question 4: What is 20 / 5?"));
if (division === 4) {
    score = score + 1;
    alert("Correct! You earned 1 point.");
} else {
    alert("Incorrect. The correct answer is 4.");
}

// Question 5
const country = prompt("Question 5: Which country am I from? (Use the English name.)");
if (country === null) {
    alert("Incorrect. You canceled the question. I am from Turkey.");
} else if (country.trim() === "") {
    alert("Incorrect. You left the answer empty. I am from Turkey.");
} else if (country.trim().toLowerCase() === "turkey") {
    score = score + 1;
    alert("Correct! You earned 1 point.");
} else {
    alert("Incorrect. I am from Turkey.");
}

// Calculate percentage
const percentage = (score / 5) * 100;

if (score === 3) {
    console.log("Three out of five! You are more than halfway to a perfect score!");
}

// Final feedback
if (score === 5) {
    alert("Excellent! You answered every question correctly!");
} else if (score >= 3) {
    alert("Good job! Keep practicing for a perfect score.");
} else {
    alert("Keep practicing! Try the quiz again.");
}

// Final summary
alert("Your final score is " + score + " out of 5 (" + percentage + "%).");
