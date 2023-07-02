import { deleteForm } from "../modules/functions";

export const createOverlay = () => {
    const container = document.querySelector('.main-container');

    const div = document.createElement('div');
    div.className = 'overlay';
    
    
    container.appendChild(div);
    closeOverlay();

    function closeOverlay() {
        div.onclick = () => {
            div.classList.toggle('overlay-active');
            if (document.querySelector('.form-container')) deleteForm();   
        }
    };
};





 