const WHATSAPP = "918688516662";

function scrollToCars() {
  document.getElementById("cars").scrollIntoView({ behavior: "smooth" });
}

function bookCar(car) {
  const msg = `Hi VB Selfdrive, I want to book ${car}.`;
  window.open(
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("whatsappLink").href =
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
      "Hi VB Selfdrive, I want to book a car."
    )}`;
});

function openMap() {
  document.getElementById("mapModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMap() {
  document.getElementById("mapModal").classList.remove("active");
  document.body.style.overflow = "";
}
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

/* Apply saved theme BEFORE interaction */
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
} else {
  toggleBtn.textContent = "🌙";
}

/* Toggle with smooth transition */
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  const isDark = body.classList.contains("dark");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";

  localStorage.setItem("theme", isDark ? "dark" : "light");
});
