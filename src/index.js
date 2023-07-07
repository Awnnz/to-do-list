import createPage from './modules/create-page';
import renderTask, {renderTasks} from './modules/renderPage';
import {createHeroContainer, createTodayContainer, createWeekContainer, createProjectsContainer} from './pages/container-swap';
import {toDoListCollection } from './modules/todo-objs';
import { clearContainer, changeHeaderTitle, markActiveSection, removeActiveSections } from './modules/functions';
import './styles/page.css';

createPage();
createHeroContainer();

let inboxSiderbar = document.querySelector('.inbox-main');

inboxSiderbar.addEventListener('click', (e) => {
    removeActiveSections();
    markActiveSection(e.target);
    changeHeaderTitle('Inbox');
    clearContainer();
    createHeroContainer();
    renderTasks(toDoListCollection.getCollection('inbox'), 'inbox');
})


document.querySelector('.today-main').addEventListener('click', (e) => {
    removeActiveSections();
    markActiveSection(e.target);
    changeHeaderTitle('Today');
    clearContainer();
    createTodayContainer();
    renderTasks(toDoListCollection.getCollection('today'), 'today');
})

document.querySelector('.week-main').addEventListener('click', (e) => {
    removeActiveSections();
    markActiveSection(e.target);
    changeHeaderTitle('Week');
    clearContainer();
    createWeekContainer();
    renderTasks(toDoListCollection.getCollection('week'), 'week');
})

document.querySelector('.projects-tab').addEventListener('click', (e) => {
    removeActiveSections();
    markActiveSection(e.target);
    changeHeaderTitle('Projects');
    clearContainer();
    createProjectsContainer();
    // renderTasks(toDoListCollection.getCollection('week'), 'week');
})








