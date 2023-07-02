const renderTask = (task) => {
    const heroContainer = document.querySelector('.hero');
    

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

export default renderTask;