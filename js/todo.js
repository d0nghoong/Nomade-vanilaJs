const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newTodo;
  button.innerText = "x";
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  button.addEventListener("click", deleteToDo);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
}
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}
toDoForm.addEventListener("submit", handleToDoSubmit);
