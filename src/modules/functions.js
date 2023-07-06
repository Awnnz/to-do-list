import {toDoListCollection} from './todo-objs.js';
import logoImage from './../assets/logo.png';
import deleteImage from './../assets/delete.svg';
import editImage from './../assets/edit.svg';
import { closeOverlay } from '../pages/overlay.js';
import { renderJustAdded } from './renderPage.js';

const addNewTask = (obj, section) => {
    toDoListCollection.add(obj, section);
    return obj
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
    
        const objData = addNewTask(extractFormData([title, description, due, priority]), section);
        createCard(objData, section);
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
    formData.forEach(input => {
        if (input )
        formDataObj[input.name] = input.value
    });
    
    formDataObj.checked = false;
    
    return formDataObj;
};

function changeHeaderTitle(section) {
    const currentSection = document.querySelector('.current-section');

    currentSection.classList.toggle('title-change');
    
    

    currentSection.textContent = section;
};

function UpdateTaskCountDisplay(section) {
    let countDisplay = document.querySelector(`.${section}-count`);
    const taskAmount = toDoListCollection.getCollection(section).length;
    
    if (taskAmount < 1) countDisplay.innerHTML = '';
    else countDisplay.innerHTML = taskAmount;  
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
    
}

function createCard(dataObj, section) {
    const heroContainer = document.querySelector(`.${section}-container`);

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    
    
    cardDiv.addEventListener('click', function (e) {
        
        if (!e.target.classList.contains('card-main')) return;
        // adds/removes checkmark on click
        const mainCardChecked = this.children[0].classList;
        const checkMarkChecker = dataObj.checked;
        if (checkMarkChecker === false) {
            mainCardChecked.toggle('checked');
            dataObj.checked = true;
            console.log(dataObj.checked)
        } else {
            mainCardChecked.toggle('checked');
            dataObj.checked = false;
            console.log(dataObj.checked)
        }
        
        // mainCardChecked.toggle('checked');
        
        
        // if (mainCardChecked.contains('checked')) {
            
        // // Looks for specific obj attached to card and removes it
        // const objSearch = toDoListCollection.getCollection(section);
        // let objIndex;
        // objSearch.forEach((obj, index) => {
        //     if (this.querySelector('.title-value').textContent === obj['title'] && (this.querySelector('.due-value').textContent === obj['due'])) {
        //         objIndex = index
        //     }
        // })

        // objSearch[objIndex].checked = true;
        // };
    })

    const cardMain = document.createElement('div');
    cardMain.classList.add('card-main');

    const cardDetails = document.createElement('div');
    cardDetails.classList.add('card-details');
    cardDetails.classList.add('card-details-hide');

    for (const prop in dataObj) {
        if (prop === 'title' || prop === 'due') {
            const div = document.createElement('div');
            div.classList.add(`${prop}-value`);
            div.innerHTML = dataObj[prop];
            cardMain.appendChild(div);
        } else if (prop === 'desc') {
            const detailsDiv = document.createElement('div');
            detailsDiv.classList.add('details-value');
            detailsDiv.innerHTML = dataObj[prop];
            cardDetails.appendChild(detailsDiv)
        }
        else if (prop === 'prio') {
            cardMain.classList.add(`${dataObj[prop]}`);
        }      
    }

    if (dataObj.checked === true) {
        cardMain.classList.add('checked');
    };

    const detailsButton = document.createElement('div');
    detailsButton.className = 'details-button';
    detailsButton.textContent = 'DETAILS';

    detailsButton.addEventListener('click', function () {
        
        this.parentElement.parentElement.querySelector('.card-details').classList.toggle('card-details-hide');
    })

    cardDiv.appendChild(cardMain);
    cardDiv.appendChild(cardDetails);

    
    if (cardMain.children[1]) cardMain.insertBefore(detailsButton, cardMain.children[1]); else cardMain.appendChild(detailsButton);

    const editButton = new Image()
    editButton.src = editImage;
    editButton.className = 'edit-button'
    cardMain.appendChild(editButton)
    
    const deleteButton = new Image()
    deleteButton.src = deleteImage;
    deleteButton.className = 'delete-button';
    
    deleteButton.addEventListener('click', function() {

        let objectIndex;
        toDoListCollection.getCollection('inbox').forEach((element, index) => {
                if (this.parentElement.querySelector('.title-value').textContent === element['title'] && (this.parentElement.querySelector('.due-value').textContent === element['due'])) {
                    objectIndex = index;
                }
            });
        
        this.parentElement.parentElement.classList.add('zoom');
        toDoListCollection.remove(section, objectIndex);
        setTimeout(() => {
            this.parentElement.parentElement.remove();
        }, 700);
        

        UpdateTaskCountDisplay(section);
    })
    cardMain.appendChild(deleteButton)
    
    heroContainer.appendChild(cardDiv);


    
}


export default addNewTask;
export {clearContainer, resetDom, openForm, deleteForm, changeHeaderTitle, UpdateTaskCountDisplay, markActiveSection, removeActiveSections, createCard};