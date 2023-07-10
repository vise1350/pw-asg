const colors = ["red", "green", "blue", "yellow", "purple"];
const button = document.getElementById("button");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const backgroundColor = colors[randomIndex];
  document.body.style.backgroundColor = backgroundColor;
});
