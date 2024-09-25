import { drawEvent } from "./drawEvent";
import {todayDate} from "./todayDate";

export const loadProjectPage = (tasks, proj) => {
    const content = document.querySelector('.content');
    const title = document.createElement("h1");
    content.innerHTML = "";
    title.innerText = `Project ${proj}`;
    content.appendChild(title);

    let count = 0;
    let name = `project${proj}`;
    if (tasks.length > 0) {
        tasks.forEach((task) => {
            // task.printDesc()
            //alert(task.project + name)
            if (task.completed === false && task.priority === true && task.project === name) {
                drawEvent(task, tasks, count);
            }
            count++;
        })
        count = 0;
        tasks.forEach((task) => {
            // task.printDesc()
            if (task.completed === false && task.priority === false && task.project === name) {
                drawEvent(task, tasks, count);
            }
            count++;
        })
        count = 0;
        tasks.forEach((task) => {
            // task.printDesc()
            if (task.completed === true && task.project === name) {
                drawEvent(task, tasks, count);
            }
            count++;
        })
    }
}