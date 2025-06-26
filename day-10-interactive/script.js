const box = document.getElementById('box');
const btn = document.getElementById("animateBtn");
const toggle = document.getElementById("themeToggle")
const body = document.body;
const donateBtn = document.getElementById("donateBtn");
const donationAmount = document.getElementById("donationAmount");
const donationMessage = document.getElementById("donationMessage");
const savedTheme = localStorage.getItem("theme") || "light";
body.classList.add(savedTheme);

btn.addEventListener("click", () => {
  let start = null;

  function animate(timestamp) {
    if (!start) start = timestamp;

    const progress = (timestamp - start) / 500 ; // длительность 500мс
    const scale = Math.max(1.5 - 0.5 * progress, 1);
    box.style.transform = `scale(${scale})`;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
});

toggle.addEventListener("click", () => {
  const newTheme = body.classList.contains("light") ? "dark" : "light";
  body.classList.remove("light", "dark");
  body.classList.add(newTheme);
  localStorage.setItem("theme", newTheme);
})

let total = Number(localStorage.getItem("totalDonated")) || 0;
updateTotalDisplay();

donateBtn.addEventListener("click", () => {
  const amount = Number(donationAmount.value);

  if (amount && amount > 0) {
    total += amount;
    localStorage.setItem("totalDonated", total); // сохраняем в браузер
    updateTotalDisplay();

    donationMessage.style.display = "block";
    donationAmount.value = "";
  } else {
    alert("Please enter a valid amount.");
  }
});

function updateTotalDisplay() {
  const display = document.getElementById("totalDisplay");
  if (display) {
    display.textContent = `Total raised: ${total}₸`;
  }
}

