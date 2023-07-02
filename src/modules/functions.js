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

const openForm = () => {
    // Activates overlay
    let overlay = document.querySelector('.overlay');
    overlay.classList.toggle('overlay-active');

    createForm();
    
};

function createForm() {
    const formContainer = document.createElement("div");
    formContainer.className = 'form-container'

    const sideBar = document.createElement('div');
    sideBar.className = 'form-sidebar';
    formContainer.appendChild(sideBar);

    // Dynamically create sidebar divs
    const sideBarSections = ['Inbox', 'Today', 'Week'];
    for (let i = 0; i < sideBarSections.length; i++) {
        const div = document.createElement('div');
        div.className = `${sideBarSections[i].toLowerCase()}-sidebar`;
        div.textContent = sideBarSections[i];
        sideBar.appendChild(div);
    }

    const form = document.createElement("form");
    form.className = 'form'
    formContainer.appendChild(form)

    const title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "Title");
    form.appendChild(title);

    const description = document.createElement("textarea");
    description.setAttribute("type", "text");
    description.setAttribute("name", "desc");
    description.setAttribute("placeholder", "Details: e.g internet, phone, rent.");
    form.appendChild(description);

    const due = document.createElement("input");
    due.setAttribute("type", "date");
    due.setAttribute("name", "due");
    form.appendChild(due);

    const priority = document.createElement('select');
    const prioChoices = ['Low', 'Moderate', 'High'];
    priority.setAttribute('name', 'prio');
    for (let i = 0; i < prioChoices.length; i++) {
        const option = document.createElement('option');
        option.textContent = prioChoices[i];
        option.setAttribute('value', `${prioChoices[i].toLocaleLowerCase()}`);
        priority.appendChild(option);
    };
    form.appendChild(priority);

    var submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    form.appendChild(submit);

    // Data extracted from form here
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(
            title.value,
            description.value,
            due.value, 
            priority.value
            );
    });

    const hero = document.querySelector('.hero');
    hero.append(formContainer);
};

function deleteForm() {
    const form = document.querySelector('.form-container');
    form.remove();
}




export default addNewTask;
export {clearContainer, resetDom, openForm, deleteForm};