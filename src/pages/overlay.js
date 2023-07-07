import { deleteForm, deleteEditForm, deleteProjectForm } from "../modules/functions";

 function createOverlay() {
    const container = document.querySelector('.main-container');

    const div = document.createElement('div');
    div.className = 'overlay';
    
    container.appendChild(div);

    div.onclick = () => {
        closeOverlay();
    }
};

function closeOverlay() {
    // if (!document.querySelector('.overlay')) return;
    const overlay = document.querySelector('.overlay');
    
    overlay.classList.toggle('overlay-active');
    if (document.querySelector('.form-container')) deleteForm();   
    
};

function closeEditOverlay() {
    // if (!document.querySelector('.overlay')) return;
    const overlay = document.querySelector('.overlay');
    
    overlay.classList.toggle('overlay-active');
    if (document.querySelector('.edit-form-container')) deleteEditForm();   
    
};

function closeProjectOverlay() {
    // if (!document.querySelector('.overlay')) return;
    const overlay = document.querySelector('.overlay');
    
    overlay.classList.toggle('overlay-active');
    if (document.querySelector('.projects-form-container')) deleteProjectForm();   
    
};

export {createOverlay, closeOverlay, closeEditOverlay, closeProjectOverlay};



 