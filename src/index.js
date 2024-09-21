import "./styles.css";
import { loadHome } from "./homePage.js";
import { loadToday } from "./todayPage";
import { loadUpcoming } from "./upcomingPage";
import { addTask } from "./addTask";
import { addTaskModal } from "./addTaskModal";
import { Task } from "./task";
import { todayDate } from "./todayDate";
import {drawPage} from "./drawPage";

export let tasks = [];
export let page = 0;

loadHome(tasks);

document.getElementById("fDate").value = todayDate();

// Sidebar links
const content = document.querySelector(".content");
const modal = document.querySelector("#myModal");

const homeButton = document.querySelector("#home-button");
homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    page = 0;
    drawPage(page, tasks);
})
const todayButton = document.querySelector("#today-button");
todayButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadToday();
})
const upcomingButton = document.querySelector("#upcoming-button");
upcomingButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadUpcoming();
})

const taskButton = document.querySelector("#task-button");
taskButton.addEventListener("click", () => {
    addTaskModal(tasks);
    modal.style.display = "block";
})

// SUBMIT
const submit = document.querySelector("#fSubmit");
submit.addEventListener("click", (event) => {
    event.preventDefault();
    tasks.push(addTask())
    loadHome(tasks);
})




