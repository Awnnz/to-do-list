import {toDoListCollection} from './todo-objs.js';
import logoImage from './../assets/logo.png';
import { closeOverlay } from '../pages/overlay.js';
import { renderJustAdded } from './renderPage.js';

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

const openForm = (section) => {
    
    // Activates overlay
    let overlay = document.querySelector('.overlay');
    overlay.classList.toggle('overlay-active');

    createForm(section);
    
};

function createForm(section) {
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

    const header = document.createElement('header');
    header.className = 'form-header';
    formContainer.appendChild(header);

    const logo = new Image();
    logo.classList.add('form-logo');
    logo.src = logoImage;
    header.appendChild(logo);

    const closeButton = document.createElement('div');
    closeButton.classList.add('close-button');
    closeButton.textContent = 'x';
    closeButton.addEventListener('click', () => {
        closeOverlay();
    });
    header.appendChild(closeButton);

    const form = document.createElement("form");
    form.className = 'form'
    formContainer.appendChild(form)

    const title = document.createElement("input");
    title.classList.add('title-input');
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "Title");
    form.appendChild(title);

    const description = document.createElement("textarea");
    description.classList.add('description');
    description.setAttribute("type", "text");
    description.setAttribute("name", "desc");
    description.setAttribute("placeholder", "Details: e.g internet, phone, rent.");
    form.appendChild(description);

    const dueDateDiv = document.createElement('div');
    dueDateDiv.className = 'date-div';
    form.appendChild(dueDateDiv);
    
    const dueDateText = document.createElement('div');
    dueDateText.className = 'date-text';
    dueDateText.innerText = 'Due Date:'
    dueDateDiv.appendChild(dueDateText);

    const due = document.createElement("input");
    due.className = 'due-date-input';
    due.setAttribute("type", "date");
    due.setAttribute("name", "due");
    dueDateDiv.appendChild(due);

    const prioSubDiv = document.createElement('div');
    prioSubDiv.className = 'prio-sub-div';
    form.appendChild(prioSubDiv);

    const priority = document.createElement('select');
    const prioChoices = ['Low', 'Moderate', 'High'];
    priority.setAttribute('name', 'prio');
    for (let i = 0; i < prioChoices.length; i++) {
        const option = document.createElement('option');
        option.textContent = prioChoices[i];
        option.setAttribute('value', `${prioChoices[i].toLocaleLowerCase()}`);
        priority.appendChild(option);
    };
    prioSubDiv.appendChild(priority);

    var submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    prioSubDiv.appendChild(submit);

    // Data extracted from form here
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    
        addNewTask(extractFormData([title, description, due, priority]), section);
        renderJustAdded(toDoListCollection.getCollection(section), `.${section}-container`);
        UpdateTaskCountDisplay(section);

        closeOverlay();
    });

    const hero = document.querySelector('.hero');
    hero.append(formContainer);
};

function deleteForm() {
    const form = document.querySelector('.form-container');
    form.remove();
}

function extractFormData(formData) {
    const formDataObj = {};
    formData.forEach(input => formDataObj[input.name] = input.value);
    return formDataObj;
};

function changeHeaderTitle(section) {
    const currentSection = document.querySelector('.current-section');

    currentSection.textContent = section;
};

function UpdateTaskCountDisplay(section) {
    let countDisplay = document.querySelector(`.${section}-count`);
    countDisplay.innerHTML = toDoListCollection.getCollection(section).length;
};

function markActiveSection(section) {
    if (section.tagName === 'SPAN') section.parentElement.classList.add('selected');
    else section.classList.add('selected');
};

function removeActiveSections() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('selected'))
};

function showCardDetail() {
    const detailsDiv = document.createElement('div');
    div.innerHTML = 'test';
    // document.querySelector('.card').appendChild(detailsDiv);
}

function scanAllCards() {
    document.querySelectorAll('.card').forEach((card) => {

        card.addEventListener('click', function() {
            console.log(this)
        })
    })
    
};
export default addNewTask;
export {clearContainer, resetDom, openForm, deleteForm, changeHeaderTitle, UpdateTaskCountDisplay, markActiveSection, removeActiveSections};