import "./styles.css";
import { loadHome } from "./homePage.js";
import { loadToday } from "./todayPage";
import { loadUpcoming } from "./upcomingPage";
import { addTask } from "./addTask";

loadHome();

// Sidebar links
const content = document.querySelector(".content");

const homeButton = document.querySelector("#task-button");
homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadHome();
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
    addTask();
})