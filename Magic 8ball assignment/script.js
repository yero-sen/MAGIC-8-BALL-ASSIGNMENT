// Magic 8 Ball Assignment

// Variables for HTML Elements
let magicBallEl = document.getElementById("magicBall");
let queInputEl = document.getElementById("queInput");
let ansInputEl = document.getElementById("ansInput");

// Add Event Listener
magicBallEl.addEventListener("click", responseOut);

//Event Functions
function responseOut() {
    // Case Insensitive
    let queIn = queInputEl.value.toLowerCase();
console.log(queIn)
    // Set responses to specific questions
    if (queIn === "does a magic 8 ball actually work?" || queIn === "does a magic 8 ball actually work") {
        ansInputEl.innerHTML = "how dare you doubt me!";
    } else if (queIn === "is computer science interesting?" || queIn === "is computer science interesting") {
        ansInputEl.innerHTML = "of course!";
    } else if (queIn === "is it enjoyable to use different coding langauge?" || queIn === "is it enjoyable to use different coding langauge?") {
        ansInputEl.innerHTML = "yes, Of course it is!";
    } else {
        // Probability
        let randomAns = Math.random();

        // Probabilities for the different answers
        if (queIn !== undefined && randomAns < 0.2) {
            ansInputEl.innerHTML = "Without a doubt.";
        } else if (randomAns < 0.3) {
            ansInputEl.innerHTML = "As I see it, yes.";
        } else if (randomAns < 0.5) {
        ansInputEl.innerHTML = "Concentrate and ask again.";
        } else if (randomAns < 0.7) {
        ansInputEl.innerHTML = "Don't count on it.";
        } else if (randomAns < 0.9) {
        ansInputEl.innerHTML = "I don't think so.";
        } else {
        ansInputEl.innerHTML = "Outlook not so good.";
        }
    }
}