import {drawEvent} from "./drawEvent";

import {todayDate} from "./todayDate";

export const loadToday = (tasks) => {
    const content = document.querySelector('.content');
    const title = document.createElement("h1");
    content.innerHTML = "";
    title.innerText = "Due Today";
    content.appendChild(title);

    let count = 0;
    if (tasks.length > 0) {
        tasks.forEach((task) => {
            // task.printDesc()
            if (task.completed === false && task.priority === true && task.due === todayDate()) {
                drawEvent(task, tasks, count);
            }
            count++;
        })
        count = 0;
        tasks.forEach((task) => {
            // task.printDesc()
            if (task.completed === false && task.priority === false && task.due === todayDate()) {
                drawEvent(task, tasks, count);
            }
            count++;
        })
        count = 0;
        tasks.forEach((task) => {
            // task.printDesc()
            if (task.completed === true && task.due === todayDate()) {
                drawEvent(task, tasks, count);
            }
            count++;
        })
    }

}