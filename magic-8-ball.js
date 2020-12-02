const positiveAnswers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes – definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
];

const neutralAnswers = [
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
];

const negativeAnswers = [
  "Don’t count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

const answers = [...positiveAnswers, ...neutralAnswers, ...negativeAnswers];

const arrayRandomValue = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const magicEightBallElt = document.querySelector("magicEightBall");
const magicEightBallStartElt = document.querySelector(".magicEightBallStart");
const magicEightBallFinishElt = document.querySelector(".magicEightBallFinish");
const answerElt = document.querySelector(".answer");

magicEightBallStartElt.onclick = () => {
  magicEightBallStartElt.classList.add("shake");
};

answerElt.onclick = () => {
  magicEightBallFinishElt.style.display = "none";
  answerElt.style.display = "none";
  magicEightBallStartElt.classList.add("shake");
};

magicEightBallStartElt.addEventListener("animationend", animationEnd);

function animationEnd() {
  answerElt.innerHTML = arrayRandomValue(answers);
  magicEightBallFinishElt.style.display = "block";
  magicEightBallFinishElt.classList.add("fade-in");
  answerElt.classList.add("fade-in");
  answerElt.style.display = "flex";
  magicEightBallStartElt.classList.remove("shake");
}
