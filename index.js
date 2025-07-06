const addBtn = document.getElementById("add-btn");
const inputValue = document.getElementById("input-value");
const listItems = document.getElementById("list-items");

let tasks = [];

addBtn.addEventListener("click", () => {
  if (inputValue.value) {
    tasks.push(inputValue.value);
    localStorage.setItem("value", JSON.stringify(tasks));
    inputValue.value = "";
    renderTasks();
  }
});

listItems.addEventListener("click", (e) => {
  if (e.target.id) {
    tasks = tasks.filter((task) => task != e.target.id);
    localStorage.setItem("value", JSON.stringify(tasks));
    renderTasks();
  }
});

function renderTasks() {
  const storedList = JSON.parse(localStorage.getItem("value"));
  if (storedList) {
    let addedTasks = ``;
    for (let task of storedList) {
      addedTasks += `<li>${task} <button id=${task} class="remove-btn">x</button></li>`;
    }
    listItems.innerHTML = addedTasks;
  }
}

renderTasks();
