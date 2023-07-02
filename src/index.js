import createPage from './modules/create-page';
import renderTask from './modules/renderPage';
import inbox from './pages/inbox';
import createTodayContainer from './pages/today';
import createWeekContainer from './pages/week';
import {toDoListCollection } from './modules/todo-objs';
import { clearContainer } from './modules/functions';
import './styles/page.css';

createPage();
inbox();

document.querySelector('.inbox').addEventListener('click', () => {
    clearContainer();
    inbox();
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






