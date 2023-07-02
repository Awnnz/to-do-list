import createPage from './modules/create-page';
import addNewTask from './modules/functions';
import renderTask from './modules/renderPage';
import inbox from './pages/inbox';
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
    inbox();
    renderTask(toDoListCollection.getCollection('inbox'));
})

document.querySelector('.today').addEventListener('click', () => {
    resetDom();
    addNewTask({title: 'poop', desc: 'relive yoself', due: 'NOW!!', prio: 'very high'}, 'inbox');
    renderTask(toDoListCollection.getCollection('inbox'));
})

document.querySelector('.week').addEventListener('click', () => {
    
});




