import {toDoListCollection} from './todo-objs.js';

const addNewTask = (obj, section) => {
    toDoListCollection.add(obj, section)
};

const clearContainer = (container) => {
    document.querySelector(container).remove();
};

const resetDom = () => {
    let cards = document.querySelectorAll('.card');
    
    cards.forEach(card => card.remove());
};



export default addNewTask;
export {clearContainer, resetDom};