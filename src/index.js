import "./styles.css";
import { loadHome } from "./homePage.js";
import { loadToday } from "./todayPage";
import { loadUpcoming } from "./upcomingPage";
import { addTaskModal } from "./addTaskModal";
import { Task } from "./task";

let tasks = [];

loadHome(tasks);

// Sidebar links
const content = document.querySelector(".content");
const modal = document.querySelector("#myModal");

const homeButton = document.querySelector("#home-button");
homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadHome(tasks);
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
const title = document.querySelector("#fTitle");
const description = document.querySelector("#fDesc");
submit.addEventListener("click", (event) => {
    event.preventDefault()
    const task = new Task(title.value, description.value);
    tasks.push(task)
    loadHome(tasks);

    // Reset Modal
    title.value = "";
    description.value = "";
    modal.style.display = "none";

    console.log(tasks);
})




