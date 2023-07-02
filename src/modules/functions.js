import {toDoListCollection} from './todo-objs.js';

const addNewTask = (obj, section) => {
    toDoListCollection.add(obj, section)
};

const clearContainer = () => {
    document.querySelector('.hero').remove();
};

const resetDom = () => {
    let cards = document.querySelectorAll('.card');
    
    cards.forEach(card => card.remove());
};



export default addNewTask;
export {clearContainer, resetDom};