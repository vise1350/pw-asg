const imageElement = document.getElementById("image");
const movementSpeed = 10;

const handleKeyDown = (event) => {
  const keycode = event.keyCode;

  if (keycode === 38) {
    // Move up
    imageElement.style.top -= movementSpeed;
  } else if (keycode === 40) {
    // Move down
    imageElement.style.top += movementSpeed;
  } else if (keycode === 37) {
    // Move left
    imageElement.style.left -= movementSpeed;
  } else if (keycode === 39) {
    // Move right
    imageElement.style.left += movementSpeed;
  }
};

document.addEventListener("keydown", handleKeyDown);
