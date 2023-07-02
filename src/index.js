import createPage from './modules/create-page';
import renderTask from './modules/renderPage';
import {createHeroContainer, createTodayContainer, createWeekContainer} from './pages/container-swap';
import {toDoListCollection } from './modules/todo-objs';
import { clearContainer } from './modules/functions';
import './styles/page.css';

createPage();
createHeroContainer();

document.querySelector('.inbox').addEventListener('click', () => {
    clearContainer();
    createHeroContainer();
    renderTask(toDoListCollection.getCollection('inbox'), '.inbox-container');
})

document.querySelector('.today').addEventListener('click', () => {
    clearContainer();
    createTodayContainer();
    renderTask(toDoListCollection.getCollection('today'), '.today-container');
})

document.querySelector('.week').addEventListener('click', () => {
    clearContainer();
    createWeekContainer();
    renderTask(toDoListCollection.getCollection('week'), '.week-container');
})








