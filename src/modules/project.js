function project(title, desc, prio, due, checked) {
    const tasks = [];
    
    const projectInfo = {
        title,
        desc,
        prio,
        due,
        checked,
        tasks
    };

    const getProjectInfo = () => {
        return projectInfo;
    }

    const addTask = (taskObj) => {
        tasks.push(taskObj); 
    };
    
    const getTasks = () => tasks;
    
    return {
        addTask,
        getTasks,
        getProjectInfo
    };
}

const projectCollection = (() => {
    let projects = {};
    
    const addProject = (projectName ,projectArr) => {
        projects[projectName] = projectArr;
    };
    
    const getProjects = () => projects;
    
    return {
        addProject,
        getProjects,
    };
})();

export {project, projectCollection}