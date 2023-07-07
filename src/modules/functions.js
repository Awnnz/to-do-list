import _ from 'lodash';
import {toDoListCollection} from './todo-objs.js';
import logoImage from './../assets/logo.png';
import deleteImage from './../assets/delete.svg';
import editImage from './../assets/edit.svg';
import { closeOverlay, closeEditOverlay, closeProjectOverlay } from '../pages/overlay.js';
import { renderJustAdded } from './renderPage.js';
import { project, projectCollection } from './project.js';

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

const openEditForm = (section, obj, card) => {
    let overlay = document.querySelector('.overlay');
    overlay.classList.toggle('overlay-active');

    editForm(section, obj, card)
};

const openProjectForm = (section, obj, card) => {
    let overlay = document.querySelector('.overlay');
    overlay.classList.toggle('overlay-active');

    createProjectForm();
};

const createProjectForm = () => {
    const formContainer = document.createElement("div");
    formContainer.className = 'form-container'
    
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
    title.setAttribute('minlength', 3);
    title.setAttribute('maxlength', '40');
    title.setAttribute('required', '');
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "Project Name");
    form.appendChild(title);

    const description = document.createElement("textarea");
    description.classList.add('description');
    description.setAttribute("type", "text");
    description.setAttribute("name", "desc");
    description.setAttribute("placeholder", "Details: e.g what type of features, functionality, goals");
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
    due.setAttribute('required', '');
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

    const checked = false;

    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    prioSubDiv.appendChild(submit);

    // Data extracted from form here
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newProject = project(title.value, description.value, priority.value, due.value, checked);
        
        createProjectCard(newProject.getProjectInfo(), 'projects')
        addToProjectsCollection(title.value, newProject.getProjectInfo());
        addToProjectsSection(title.value);
        closeOverlay();
    });

    const hero = document.querySelector('.hero');
    hero.append(formContainer);
};

function addToProjectsCollection (projectName, projectArr) {
    projectCollection.addProject(projectName, projectArr);
}

function addToProjectsSection (projectName) {
    const projectSection = document.querySelector('.projects-section');

    const projectDiv = document.createElement('div');
    projectDiv.className = 'project-tag'
    projectDiv.innerHTML = projectName;
    projectSection.appendChild(projectDiv)
};

function createProjectCard(dataObj, section) {
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
        } else {
            mainCardChecked.toggle('checked');
            dataObj.checked = false;
        }

        // UpdateTaskCountDisplay(section, checkmarkCounterDisplay(section))
        
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

    editButton.addEventListener('click', function () {
        const title = this.parentElement.querySelector('.title-value').textContent;
        const desc = this.parentElement.nextSibling.querySelector('.details-value').innerHTML;
        const due = this.parentElement.querySelector('.due-value').textContent;
        const prio = this.parentElement.classList[1];
        const checked = this.parentElement.classList.contains('checked');

        const cardObj = {
            title,
            desc,
            due,
            prio,
            checked,
        }

        const projectFromDatabase = project.getProjectInfo();

        let objMatch;

        for (const obj of objCollection) {
            if (_.isEqual(cardObj, obj)) objMatch = obj;  
        };
        
        const thisCard = this.parentElement;
         
        openEditProjectForm('project', objMatch ,thisCard)  
        console.log(this)
    })

    cardMain.appendChild(editButton)
    
    const deleteButton = new Image()
    deleteButton.src = deleteImage;
    deleteButton.className = 'delete-button';
    
    deleteButton.addEventListener('click', function() {

    })
    cardMain.appendChild(deleteButton)
    
    heroContainer.appendChild(cardDiv);
}

function openEditProjectForm() {
    let overlay = document.querySelector('.overlay');
    overlay.classList.toggle('overlay-active');

    editProjectForm(section, obj, card)
};

function editProjectForm(section, obj, card) {
    const formContainer = document.createElement("div");
    formContainer.className = 'edit-form-container'
    
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
        closeEditOverlay()
    });
    header.appendChild(closeButton);

    const form = document.createElement("form");
    form.className = 'form'
    formContainer.appendChild(form)

    const title = document.createElement("input");
    title.classList.add('title-input');
    title.setAttribute('minlength', 3);
    title.setAttribute('maxlength', '40');
    title.setAttribute('required', '');
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "Title");
    title.setAttribute(`value`, obj.title)
    form.appendChild(title);

    const description = document.createElement("textarea");
    description.classList.add('description');
    description.setAttribute("type", "text");
    description.setAttribute("name", "desc");
    description.setAttribute("placeholder", "Details: e.g internet, phone, rent.");
    description.textContent = `${obj.desc}`;
    form.appendChild(description);

    const dueDateDiv = document.createElement('div');
    dueDateDiv.className = 'date-div';
    form.appendChild(dueDateDiv);
    
    const dueDateText = document.createElement('div');
    dueDateText.className = 'date-text';
    dueDateText.innerText = 'Due Date:'
    // dueDateText.setAttribute(`value`, `${obj.due}`);
    dueDateDiv.appendChild(dueDateText);

    const due = document.createElement("input");
    due.className = 'due-date-input';
    due.setAttribute('required', '');
    due.setAttribute("type", "date");
    due.setAttribute("name", "due");
    due.value = obj.due;
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
        option.className = `${prioChoices[i]}-value`
        option.setAttribute('value', `${prioChoices[i].toLocaleLowerCase()}`);

        if (prioChoices[i].toLowerCase() === obj.prio) {
            option.setAttribute('selected', 'selected');
        }
        priority.appendChild(option);
    };

    prioSubDiv.appendChild(priority);
    const checked = obj.checked;
    
    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    prioSubDiv.appendChild(submit);

    // Data extracted from form here
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const UpdatedObjData = extractFormData([title, description, due, priority], checked);
        
        Object.assign(obj, UpdatedObjData);

        card.classList.replace(card.classList[1], obj.prio);
        card.querySelector('.title-value').textContent = obj.title;
        card.querySelector('.due-value').textContent = obj.due;
        card.nextSibling.querySelector('.details-value').textContent = obj.desc

        closeEditOverlay();
    });

    const hero = document.querySelector('.hero');
    hero.append(formContainer);
};


const editForm = (section, obj, card) => {
    const formContainer = document.createElement("div");
    formContainer.className = 'edit-form-container'
    
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
        closeEditOverlay()
    });
    header.appendChild(closeButton);

    const form = document.createElement("form");
    form.className = 'form'
    formContainer.appendChild(form)

    const title = document.createElement("input");
    title.classList.add('title-input');
    title.setAttribute('minlength', 3);
    title.setAttribute('maxlength', '40');
    title.setAttribute('required', '');
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "Title");
    title.setAttribute(`value`, obj.title)
    form.appendChild(title);

    const description = document.createElement("textarea");
    description.classList.add('description');
    description.setAttribute("type", "text");
    description.setAttribute("name", "desc");
    description.setAttribute("placeholder", "Details: e.g internet, phone, rent.");
    description.textContent = `${obj.desc}`;
    form.appendChild(description);

    const dueDateDiv = document.createElement('div');
    dueDateDiv.className = 'date-div';
    form.appendChild(dueDateDiv);
    
    const dueDateText = document.createElement('div');
    dueDateText.className = 'date-text';
    dueDateText.innerText = 'Due Date:'
    // dueDateText.setAttribute(`value`, `${obj.due}`);
    dueDateDiv.appendChild(dueDateText);

    const due = document.createElement("input");
    due.className = 'due-date-input';
    due.setAttribute('required', '');
    due.setAttribute("type", "date");
    due.setAttribute("name", "due");
    due.value = obj.due;
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
        option.className = `${prioChoices[i]}-value`
        option.setAttribute('value', `${prioChoices[i].toLocaleLowerCase()}`);

        if (prioChoices[i].toLowerCase() === obj.prio) {
            option.setAttribute('selected', 'selected');
        }
        priority.appendChild(option);
    };

    prioSubDiv.appendChild(priority);
    const checked = obj.checked;
    
    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    prioSubDiv.appendChild(submit);

    // Data extracted from form here
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const UpdatedObjData = extractFormData([title, description, due, priority], checked);
        
        Object.assign(obj, UpdatedObjData);

        card.classList.replace(card.classList[1], obj.prio);
        card.querySelector('.title-value').textContent = obj.title;
        card.querySelector('.due-value').textContent = obj.due;
        card.nextSibling.querySelector('.details-value').textContent = obj.desc

        closeEditOverlay();
    });

    const hero = document.querySelector('.hero');
    hero.append(formContainer);
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
        div.classList.add('sidebar-section');
        div.textContent = sideBarSections[i];
        div.addEventListener('click', function () {
            
            (() => {
                const sidebarSections = document.querySelectorAll('.sidebar-section');
                sidebarSections.forEach((section) => {
                    if (section.classList.contains('sidebar-selected')) section.classList.remove('sidebar-selected');
                })
            })();
            this.classList.add('sidebar-selected');
        })
        
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
    title.setAttribute('minlength', 3);
    title.setAttribute('maxlength', '40');
    title.setAttribute('required', '');
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
    due.setAttribute('required', '');
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

    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    prioSubDiv.appendChild(submit);

    // Data extracted from form here
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let sectionSelected = document.querySelector('.sidebar-selected');
        if (sectionSelected) {
            sectionSelected = document.querySelector('.sidebar-selected').innerHTML.toLowerCase();

            const objData = addNewTask(extractFormData([title, description, due, priority]), sectionSelected);
            
            UpdateTaskCountDisplay(sectionSelected, checkmarkCounterDisplay(sectionSelected));

            closeOverlay();
            return;
        }
        
        const objData = addNewTask(extractFormData([title, description, due, priority]), section);
        createCard(objData, section);
        UpdateTaskCountDisplay(section, checkmarkCounterDisplay(section));

        closeOverlay();
    });

    const hero = document.querySelector('.hero');
    hero.append(formContainer);
};

function deleteForm() {
    const form = document.querySelector('.form-container');
    form.remove();
}

function deleteEditForm() {
    const form = document.querySelector('.edit-form-container');
    form.remove();
}

function deleteProjectForm () {
    const form = document.querySelector('.projects-form-container');
    form.remove();
};

function extractFormData(formData, checked) {
    
    const formDataObj = {};
    formData.forEach(input => {
        if (input )
        formDataObj[input.name] = input.value
    });
    
    formDataObj.checked = false;

    if (checked === true) formDataObj.checked = true;
    
    return formDataObj;
};

function changeHeaderTitle(section) {
    const currentSection = document.querySelector('.current-section');

    currentSection.classList.toggle('title-change');
    
    

    currentSection.textContent = section;
};

function UpdateTaskCountDisplay(section, checkmarkAmount) {
    let countDisplay = document.querySelector(`.${section}-count`);
    const taskAmount = toDoListCollection.getCollection(section).length;
    
    if (checkmarkAmount !== undefined) {
        if ((taskAmount - checkmarkAmount) < 1) countDisplay.innerHTML = '';
    else countDisplay.innerHTML = taskAmount - checkmarkAmount;
    return;  
    }

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
        } else {
            mainCardChecked.toggle('checked');
            dataObj.checked = false;
        }

        UpdateTaskCountDisplay(section, checkmarkCounterDisplay(section))
        
    })

    // const prioDiv = document.createElement('div');
    // prioDiv.className = dataObj.prio;
    // cardDiv.appendChild(prioDiv);

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

    editButton.addEventListener('click', function () {
        // Creates own data obj from card and matches to obj in collection
        const title = this.parentElement.querySelector('.title-value').textContent;
        const desc = this.parentElement.nextSibling.querySelector('.details-value').innerHTML;
        const due = this.parentElement.querySelector('.due-value').textContent;
        const prio = this.parentElement.classList[1];
        const checked = this.parentElement.classList.contains('checked');

        const cardObj = {
            title,
            desc,
            due,
            prio,
            checked,
        }

        const objCollection = toDoListCollection.getCollection(section);

        let objMatch;

        for (const obj of objCollection) {
            if (_.isEqual(cardObj, obj)) objMatch = obj;  
        };
        
        const thisCard = this.parentElement;
        
        openEditForm(section, objMatch, thisCard);  
    })

    cardMain.appendChild(editButton)
    
    const deleteButton = new Image()
    deleteButton.src = deleteImage;
    deleteButton.className = 'delete-button';
    
    deleteButton.addEventListener('click', function() {

        let objectIndex;
        toDoListCollection.getCollection(section).forEach((element, index) => {
                if (this.parentElement.querySelector('.title-value').textContent === element['title'] && (this.parentElement.querySelector('.due-value').textContent === element['due'])) {
                    objectIndex = index;
                }
            });
        
        this.parentElement.parentElement.classList.add('zoom');
        toDoListCollection.remove(section, objectIndex);
        setTimeout(() => {
            this.parentElement.parentElement.remove();
        }, 200);
        

        UpdateTaskCountDisplay(section, checkmarkCounterDisplay(section));
    })
    cardMain.appendChild(deleteButton)
    
    heroContainer.appendChild(cardDiv);
}

const checkmarkCounterDisplay = function(section) {
    const collectionArr = toDoListCollection.getCollection(section);
    let finishedTasksAmount;
    collectionArr.forEach(obj => {
        if (obj.checked === true) {
            if (finishedTasksAmount === undefined)
            finishedTasksAmount = 1; else {
                finishedTasksAmount += 1;
            }
        }
    })

    return finishedTasksAmount;
};


export default addNewTask;
export {clearContainer, resetDom, openForm, deleteForm, changeHeaderTitle, UpdateTaskCountDisplay, markActiveSection, removeActiveSections, createCard, deleteEditForm, openProjectForm, deleteProjectForm};