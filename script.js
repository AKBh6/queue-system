const themeToggle = document.getElementById("themeToggle");
const orderBtn = document.getElementById("orderBtn");
const restaurantSelect = document.getElementById("restaurantSelect");
const currentDisplay = document.getElementById("current");
const statusDisplay = document.getElementById("status");

let activeToken = null;

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = 
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

orderBtn.addEventListener("click", () => {
  const restaurant = restaurantSelect.value;

  if (!restaurant) {
    alert("Please select a restaurant.");
    return;
  }

  activeToken = Math.floor(1000 + Math.random() * 9000);
  currentDisplay.textContent = activeToken;
  statusDisplay.textContent = "Preparing...";

  setTimeout(() => {
    statusDisplay.textContent = "Ready!";
    showNotification(restaurant, activeToken);
  }, 5000);
});

function showNotification(restaurant, token) {
  if (Notification.permission === "granted") {
    new Notification(`Order Ready at ${restaurant}`, {
      body: `Token #${token} is ready for pickup!`
    });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        new Notification(`Order Ready at ${restaurant}`, {
          body: `Token #${token} is ready for pickup!`
        });
      }
    });
  }
}
