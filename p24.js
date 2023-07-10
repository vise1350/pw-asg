const paragraphElement = document.getElementById("paragraph");

const words = paragraphElement.textContent.split(" ");

for (const word of words) {
  if (word.length > 8) {
    const wordElement = document.createElement("span");
    wordElement.textContent = word;
    wordElement.style.backgroundColor = "yellow";
    paragraphElement.appendChild(wordElement);
  }
}
