import addNewTask, {openForm} from "../modules/functions";
import { toDoListCollection } from "../modules/todo-objs";
import { renderJustAdded } from "../modules/renderPage";

const createHeroContainer = () => {
    const container = document.querySelector('.main-container');

    const heroContainer = document.createElement('div');
    heroContainer.className = 'hero';
    heroContainer.classList.add('inbox-container')
    heroContainer.innerHTML = `
    <button class="new-task inbox-add inbox-flag">+</button>
    `;
    container.appendChild(heroContainer);

    document.querySelector('.new-task').addEventListener('click', () => {
        
        openForm();
    });
};

const createTodayContainer = () => {
    const container = document.querySelector('.main-container');

    const todayContainer = document.createElement('div');
    todayContainer.className = 'hero';
    todayContainer.classList.add('today-container')
    todayContainer.innerHTML = `
    <button class="new-task today-add today-flag">+</button>
    `;
    container.appendChild(todayContainer);

    document.querySelector('.new-task').addEventListener('click', () => {
        addNewTask({title: 'poop', desc: 'relive yoself', due: 'NOW!!', prio: 'very high'}, 'today');
        renderJustAdded(toDoListCollection.getCollection('today'), '.today-container');
    });
};

const createWeekContainer = () => {
    const container = document.querySelector('.main-container');

    const weekContainer = document.createElement('div');
    weekContainer.className = 'hero';
    weekContainer.classList.add('week-container')
    weekContainer.innerHTML = `
    <button class="new-task week-add week-flag">+</button>
    `;
    container.appendChild(weekContainer);

    document.querySelector('.new-task').addEventListener('click', () => {
        addNewTask({title: 'poop', desc: 'relive yoself', due: 'NOW!!', prio: 'very high'}, 'week');
        renderJustAdded(toDoListCollection.getCollection('week'), '.week-container');        
    });
};

export {createHeroContainer, createTodayContainer, createWeekContainer};