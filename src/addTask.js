import {Task} from "./task";
import { todayDate } from "./todayDate";

export const addTask = task => {
    const title = document.querySelector("#fTitle");
    const description = document.querySelector("#fDesc");
    const due = document.querySelector("#fDate");
    const projects = document.querySelector("#fProjects"); // not created yet
    const urgent = document.querySelector("#fUrgent");
    const modal = document.querySelector("#myModal");
    let completed = false;

    const newTask = new Task(title.value, description.value, due.value, todayDate(), projects.value,  urgent.checked, completed);
    title.value = "";
    description.value = "";
    due.value = todayDate();
    urgent.checked = false;
    modal.style.display = "none";
    return newTask;
}