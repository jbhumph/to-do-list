import {Task} from "./task";
import { todayDate } from "./todayDate";

export const addTask = task => {
    const title = document.querySelector("#fTitle");
    const description = document.querySelector("#fDesc");
    const due = document.querySelector("#fDate");
    const modal = document.querySelector("#myModal");

    const newTask = new Task(title.value, description.value, due.value, todayDate());
    title.value = "";
    description.value = "";
    due.value = todayDate();
    modal.style.display = "none";
    return newTask;
}