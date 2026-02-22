const themeToggle = document.getElementById("themeToggle");
const restaurantCards = document.querySelectorAll(".restaurant-card");
const orderBtn = document.getElementById("orderBtn");
const tokenDisplay = document.getElementById("tokenDisplay");
const statusDisplay = document.getElementById("statusDisplay");

let selectedRestaurant = null;

/* THEME SYSTEM */

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "Light";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "Light";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "Dark";
  }
});

/* RESTAURANT SELECTION */

restaurantCards.forEach(card => {
  card.addEventListener("click", () => {
    restaurantCards.forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
    selectedRestaurant = card.dataset.name;
    orderBtn.disabled = false;
  });
});

/* ORDER GENERATION */

orderBtn.addEventListener("click", () => {
  if (!selectedRestaurant) return;

  const token = Math.floor(1000 + Math.random() * 9000);

  tokenDisplay.textContent = token;
  statusDisplay.textContent = "Preparing...";

});
