let queue = [];
let tokenCounter = 0;

const currentDisplay = document.getElementById("current");
const waitingDisplay = document.getElementById("waiting");
const generateBtn = document.getElementById("generateBtn");
const serveBtn = document.getElementById("serveBtn");
const resetBtn = document.getElementById("resetBtn");

generateBtn.addEventListener("click", () => {
  tokenCounter++;
  queue.push(tokenCounter);
  updateWaiting();
});

serveBtn.addEventListener("click", () => {
  if (queue.length === 0) {
    currentDisplay.textContent = "None";
    return;
  }

  const servedToken = queue.shift();
  currentDisplay.textContent = servedToken;
  updateWaiting();
});

resetBtn.addEventListener("click", () => {
  queue = [];
  tokenCounter = 0;
  currentDisplay.textContent = "None";
  updateWaiting();
});

function updateWaiting() {
  waitingDisplay.textContent = queue.length;
}
