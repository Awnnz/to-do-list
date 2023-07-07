import { createOverlay } from "../pages/overlay";
import logo from './../assets/logo2.png';
import { toDoListCollection } from "./todo-objs";
import { project, projectCollection } from "./project";

const createPage = () => {
    const container = document.querySelector('.main-container');

    const createHeader = (() => {
        const header = document.createElement('header');
        header.className = 'header';
        
        header.innerHTML = `
        <div class="logo">
        <img class='logo-image' src=${logo}>
        </div>
        <div class="current-section">Inbox</div>
        <div class="login">Login</div>
        `;

        container.appendChild(header);

        // document.querySelector('.login').addEventListener('click', ()=>{
        //    const project1 = project('project1');
           

        //    const project2 = project('project2');

        //    project1.addTask({title:'eat', desc:'replenish nutes', prio:'high', due:'now'})
           

        //    project1.addTask({title:'shit', desc:'fuck', prio:'low', due:'yea'})
           
        //    project2.addTask({title:'job', desc:'money', prio:'girls', due:'cocaine'})

        //    projectCollection.addProject(project1.name ,project1.getTasks());
        //    projectCollection.addProject(project2.name, project2.getTasks());
        //    console.log(projectCollection.getProjects());
        // });

    })();

    const createSideBar = (() => {
        const sideBar = document.createElement('div');
        sideBar.className = 'sidebar';
        sideBar.innerHTML = `
        <div class="inbox-main section">
            <span class='inbox-text'>Inbox</span>
            <span class='inbox-count task-count'></span>
        </div>
        <div class="today-main section">
            <span class='today-text'>Today</span>
            <span class='today-count task-count'></span>
        </div>
        <div class="week-main section">
            <span class='week-text'>Week</span>
            <span class='week-count task-count'></span>
        </div>
        <div class="projects-tab">
            <div class='project-text section'>
            Projects
            </div>
            <div class='projects-section'>

            </div>
        </div>
        `;
        container.appendChild(sideBar);
    })();    

    createOverlay();
};

export default createPage;