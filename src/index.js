import createPage from './modules/create-page';
import addNewTask from './modules/functions';
import renderTask from './modules/renderPage';
import inbox from './pages/inbox';
import createTodayContainer from './pages/today';
import {toDoListCollection } from './modules/todo-objs';
import { clearContainer } from './modules/functions';
import { resetDom } from './modules/functions';
import './styles/page.css';

createPage();
inbox();

// addNewTask({title: 'eat', desc: 'yo', due: 'now', prio: 'high'}, 'inbox');

// addNewTask({title: 'poop', desc: 'relive yoself', due: 'NOW!!', prio: 'very high'}, 'inbox');

// addNewTask({title: 'shawty', desc: 'we learnin', due: 'later', prio: 'low'}, 'today');

// addNewTask({title: 'poop', desc: 'relive yoself', due: 'NOW!!', prio: 'very high'}, 'inbox');


// renderTask(toDoListCollection.getCollection('inbox'));

document.querySelector('.inbox').addEventListener('click', () => {
    clearContainer('.inbox-container');
    clearContainer('.today-container');
    inbox();
    renderTask(toDoListCollection.getCollection('inbox'), '.inbox-container');
})

document.querySelector('.today').addEventListener('click', () => {
    clearContainer('.today-container');
    clearContainer('.inbox-container');
    createTodayContainer();
    renderTask(toDoListCollection.getCollection('today'), '.today-container');
})






