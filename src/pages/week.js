import { resetDom } from "../modules/functions";
import addNewTask from "../modules/functions";
import renderTask from "../modules/renderPage";
import { toDoListCollection } from "../modules/todo-objs";

const createWeekContainer = () => {
    const container = document.querySelector('.main-container');

    const weekContainer = document.createElement('div');
    weekContainer.className = 'hero';
    weekContainer.classList.add('week-container')
    weekContainer.innerHTML = `
    <button class="new-task week-add">+</button>
    `;
    container.appendChild(weekContainer);

    document.querySelector('.new-task').addEventListener('click', () => {
        resetDom();
        addNewTask({title: 'poop', desc: 'relive yoself', due: 'NOW!!', prio: 'very high'}, 'week');
        renderTask(toDoListCollection.getCollection('week'), '.week-container');
    });
};

export default createWeekContainer;