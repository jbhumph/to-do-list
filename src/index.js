import "./styles.css";
import { loadHome } from "./homePage.js";
import { loadToday } from "./todayPage";
import { loadUpcoming } from "./upcomingPage";
import { addTask } from "./addTask";
import { addTaskModal } from "./addTaskModal";
import { Task } from "./task";
import { todayDate } from "./todayDate";
import {drawPage} from "./drawPage";
import {numericalDate} from "./numericalDate";

export let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
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
    page = 1;
    drawPage(page, tasks);
})
const upcomingButton = document.querySelector("#upcoming-button");
upcomingButton.addEventListener("click", () => {
    content.innerHTML = "";
    page = 2;
    drawPage(page, tasks);
})

const taskButton = document.querySelector("#task-button");
taskButton.addEventListener("click", () => {
    addTaskModal(tasks);
    modal.style.display = "block";
})

const projectOne = document.querySelector("#projectOne");
projectOne.addEventListener("click", () => {
    content.innerHTML = "";
    page = 3;
    drawPage(page, tasks);
})

const projectTwo = document.querySelector("#projectTwo");
projectTwo.addEventListener("click", () => {
    content.innerHTML = "";
    page = 4;
    drawPage(page, tasks);
})

const projectThree = document.querySelector("#projectThree");
projectThree.addEventListener("click", () => {
    content.innerHTML = "";
    page = 5;
    drawPage(page, tasks);
})

const projectFour = document.querySelector("#projectFour");
projectFour.addEventListener("click", () => {
    content.innerHTML = "";
    page = 6;
    drawPage(page, tasks);
})

const projectFive = document.querySelector("#projectFive");
projectFive.addEventListener("click", () => {
    content.innerHTML = "";
    page = 7;
    drawPage(page, tasks);
})

// SUBMIT
const submit = document.querySelector("#fSubmit");
submit.addEventListener("click", (event) => {
    event.preventDefault();
    tasks.push(addTask())
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadHome(tasks);
})



