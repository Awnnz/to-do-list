import createPage from './modules/create-page';
import renderTask from './modules/renderPage';
import {createHeroContainer, createTodayContainer, createWeekContainer} from './pages/container-swap';
import {toDoListCollection } from './modules/todo-objs';
import { clearContainer, changeHeaderTitle, UpdateTaskCountDisplay } from './modules/functions';
import './styles/page.css';

createPage();
createHeroContainer();

let inboxSiderbar = document.querySelector('.inbox-main');

inboxSiderbar.addEventListener('click', (e) => {
    changeHeaderTitle('Inbox');
    clearContainer();
    createHeroContainer();
    renderTask(toDoListCollection.getCollection('inbox'), '.inbox-container');
})



document.querySelector('.today-main').addEventListener('click', (e) => {
    changeHeaderTitle('Today');
    clearContainer();
    createTodayContainer();
    renderTask(toDoListCollection.getCollection('today'), '.today-container');
})

document.querySelector('.week-main').addEventListener('click', (e) => {
    changeHeaderTitle('Week');
    clearContainer();
    createWeekContainer();
    renderTask(toDoListCollection.getCollection('week'), '.week-container');
})








