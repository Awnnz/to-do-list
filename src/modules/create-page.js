import { createOverlay } from "../pages/overlay";

const createPage = () => {
    const container = document.querySelector('.main-container');

    const createHeader = (() => {
        const header = document.createElement('header');
        header.className = 'header';
        header.innerHTML = `
        <div class="logo">ToDo App</div>
        <div class="current-section">Inbox</div>
        <div class="login">Login</div>
        `;
        container.appendChild(header);
    })();

    const createSideBar = (() => {
        const sideBar = document.createElement('div');
        sideBar.className = 'sidebar';
        sideBar.innerHTML = `
        <div class="inbox section">Inbox</div>
        <div class="today section">Today</div>
        <div class="week section">This Week</div>
        `;
        container.appendChild(sideBar);
    })();    

    createOverlay();
};

export default createPage;