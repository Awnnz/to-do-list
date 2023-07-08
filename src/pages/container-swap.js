import addNewTask, { openForm } from "../modules/functions";
import { toDoListCollection } from "../modules/todo-objs";
import { renderJustAdded } from "../modules/renderPage";

const createHeroContainer = () => {
  const container = document.querySelector(".main-container");

  const heroContainer = document.createElement("div");
  heroContainer.className = "hero";
  heroContainer.classList.add("inbox-container");
  heroContainer.innerHTML = `
    <button class="new-task inbox-add" id='inbox'>+</button>
    `;
  container.appendChild(heroContainer);

  document.querySelector(".new-task").addEventListener("click", (e) => {
    openForm(e.target.id);
  });
};

const createTodayContainer = () => {
  const container = document.querySelector(".main-container");

  const todayContainer = document.createElement("div");
  todayContainer.className = "hero";
  todayContainer.classList.add("today-container");
  todayContainer.innerHTML = `
    <button class="new-task today-add" id='today'>+</button>
    `;
  container.appendChild(todayContainer);

  document.querySelector(".new-task").addEventListener("click", (e) => {
    openForm(e.target.id);
  });
};

const createWeekContainer = () => {
  const container = document.querySelector(".main-container");

  const weekContainer = document.createElement("div");
  weekContainer.className = "hero";
  weekContainer.classList.add("week-container");
  weekContainer.innerHTML = `
    <button class="new-task week-add" id='week'>+</button>
    `;
  container.appendChild(weekContainer);

  document.querySelector(".new-task").addEventListener("click", (e) => {
    openForm(e.target.id);
  });
};

export { createHeroContainer, createTodayContainer, createWeekContainer };
