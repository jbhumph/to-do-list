import { drawEvent } from "./drawEvent";

export const loadHome = (tasks) => {
    const content = document.querySelector('.content');
    const title = document.createElement("h1");
    content.innerHTML = "";
    title.innerText = "Home Page";
    content.appendChild(title);


    if (tasks.length > 0) {
        tasks.forEach((task) => {
            // task.printDesc()
            if (task.completed === false) {
                drawEvent(task);
            }
            if (task.completed === true) {
                drawEvent(task);
            }

        })
    }


}