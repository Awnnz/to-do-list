import { resetDom } from "../modules/functions";
import addNewTask from "../modules/functions";
import renderTask from "../modules/renderPage";
import { toDoListCollection } from "../modules/todo-objs";

const createTodayContainer = () => {
    const container = document.querySelector('.main-container');

    const todayContainer = document.createElement('div');
    todayContainer.className = 'hero';
    todayContainer.classList.add('today-container')
    todayContainer.innerHTML = `
    <button class="new-task today-add">+</button>
    `;
    container.appendChild(todayContainer);

    document.querySelector('.new-task').addEventListener('click', () => {
        resetDom();
        addNewTask({title: 'poop', desc: 'relive yoself', due: 'NOW!!', prio: 'very high'}, 'today');
        renderTask(toDoListCollection.getCollection('today'), '.today-container');
    });
};

export default createTodayContainer;