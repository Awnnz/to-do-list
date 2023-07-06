import { toDoListCollection } from "./todo-objs";
import { createCard } from "./functions";

const renderTask = (task, section) => {
    const heroContainer = document.querySelector(section);
    if (!task) return;
    
    for (let i = 0; i < task.length; i++) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';

        for (const prop in task[i]) {
            const div = document.createElement('div');
            div.innerHTML = `${prop}: ${task[i][prop]}`;
            cardDiv.appendChild(div);
        }
        
        heroContainer.appendChild(cardDiv);
    };
};

const renderJustAdded = (obj, section) => {
    const heroContainer = document.querySelector(section);
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    cardDiv.addEventListener('click', function() {
        const test = document.createElement('span');
        test.innerHTML = 'test';
        this.appendChild(test);
    })
    
    for (const prop in obj[obj.length - 1]) {
        const div = document.createElement('div');
        div.innerHTML = `${prop}: ${obj[obj.length-1][prop]}`;
        cardDiv.appendChild(div);
    }
    heroContainer.appendChild(cardDiv);
};

const renderTasks = (dataObj, section) =>{
    if (!dataObj) return;
    dataObj.forEach(task => {
        createCard(task, section)
    })
};

export default renderTask;
export {renderJustAdded, renderTasks};