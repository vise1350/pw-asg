const todoItems = [];
const inputField = document.getElementById("input");
const button = document.getElementById("add-item");

button.addEventListener("click", () => {
  const todoItem = inputField.value;
  todoItems.push(todoItem);
  inputField.value = "";

  const listElement = document.getElementById("list");
  const listItemElement = document.createElement("li");
  listItemElement.textContent = todoItem;
  listElement.appendChild(listItemElement);
});
