import { resetDom } from "../modules/functions";
import addNewTask from "../modules/functions";
import renderTask from "../modules/renderPage";
import { toDoListCollection } from "../modules/todo-objs";

const createHeroContainer = () => {
    const container = document.querySelector('.main-container');

    const heroContainer = document.createElement('div');
    heroContainer.className = 'hero';
    heroContainer.classList.add('inbox-container')
    heroContainer.innerHTML = `
    <button class="new-task inbox-add">+</button>
    `;
    container.appendChild(heroContainer);

    document.querySelector('.new-task').addEventListener('click', () => {
        resetDom();
        addNewTask({title: 'poop', desc: 'relive yoself', due: 'NOW!!', prio: 'very high'}, 'inbox');
        renderTask(toDoListCollection.getCollection('inbox'), '.inbox-container');
    });
};

export default createHeroContainer;