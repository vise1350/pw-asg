const progressBar = document.getElementById("progress-bar");
const scrollHeight = document.body.scrollHeight;
const progress = 0;

window.addEventListener("scroll", () => {
  progress = window.scrollY / scrollHeight;
  progressBar.style.width = progress * 100 + "%";
});
