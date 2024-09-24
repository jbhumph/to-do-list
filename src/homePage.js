import { drawEvent } from "./drawEvent";

export const loadHome = (tasks) => {
    const content = document.querySelector('.content');
    const title = document.createElement("h1");
    content.innerHTML = "";
    title.innerText = "Home Page";
    content.appendChild(title);

    let count = 0;
    if (tasks.length > 0) {
        tasks.forEach((task) => {
            // task.printDesc()
            if (task.completed === false && task.priority === true) {
                drawEvent(task, tasks, count);
            }
            count++;
        })
        count = 0;
        tasks.forEach((task) => {
            // task.printDesc()
            if (task.completed === false && task.priority === false) {
                drawEvent(task, tasks, count);
            }
            count++;
        })
        count = 0;
        tasks.forEach((task) => {
            // task.printDesc()
            if (task.completed === true) {
                drawEvent(task, tasks, count);
            }
            count++;
        })
    }


}