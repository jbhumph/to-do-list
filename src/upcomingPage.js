import {todayDate} from "./todayDate";
import {drawEvent} from "./drawEvent";
import {numericalDate} from "./numericalDate";
import {reString} from "./reString";


export const loadUpcoming = (tasks) => {
    const content = document.querySelector('.content');
    const title = document.createElement("h1");
    const ret = document.createElement("hr");
    content.innerHTML = "";
    title.innerText = "Upcoming Tasks";
    content.appendChild(title);

    let count = 0;
    let number = numericalDate()
    if (tasks.length > 0) {

        let bool = false;
        for (let i = 0; i < 1200; i++) {
            let nameDate;
            tasks.forEach((task) => {
                // task.printDesc()
                if (task.completed === false && reString(task.due) === number.toString()) {
                    if (bool === false) {
                        const nameDate = document.createElement("div");
                        nameDate.innerText = `${task.due}`;
                        content.appendChild(nameDate);
                    }
                    bool = true;
                    drawEvent(task, tasks, count);
                }
                //alert(reString(task.due) + "--" + number);
                count++;
            })
            number++;
            bool = false;
        }

    }
}