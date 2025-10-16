const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light")
    ? "🌙 Dark Mode"
    : "☀️ Light Mode";
});
const printBtn = document.getElementById("print-btn");
printBtn.addEventListener("click", () => {
  window.print();
});