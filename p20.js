const listItems = ["Learn about JavaScript", "Learn about HTML", "Learn about CSS"];
const listElement = document.getElementById("list");
const button = document.getElementById("add-item");

button.addEventListener("click", () => {
  const index = listItems.length;

  if (index === 0) {
    alert("All items have been added!");
    return;
  }

  listItems.push(listItems[index - 1]);
  const listItemElement = document.createElement("li");
  listItemElement.textContent = listItems[index];
  listElement.appendChild(listItemElement);
});
