import alertNo  from "./images/alertNo.svg";
import alertYes from "./images/alertYes.svg";
import checkedCircle from "./images/circle-checked.svg";
import edit from "./images/edit.svg";
import project0 from "./images/project0.svg";
import project1 from "./images/project1.svg";
import project2 from "./images/project2.svg";
import project3 from "./images/project3.svg";
import project4 from "./images/project4.svg";
import project5 from "./images/project5.svg";
import trash from "./images/delete.svg";
import uncheckedCircle from "./images/circle-unchecked.svg";

import {drawPage} from "./drawPage";
import {page} from "./index";
import {tasks} from "./index"

export function drawEvent(event) {
    const content = document.querySelector('.content');
    const box = document.createElement("div");
    box.classList.add("taskBox");
    const bTitle = document.createElement("div");
    const bDesc = document.createElement("div");
    const bDue = document.createElement("div");
    const bCreated = document.createElement("div");

    // completed
    if (event.completed === true) {
        box.classList.remove("taskBox");
        box.classList.add("completeBox");
    }

    // Checkbox
    const left = document.createElement("div");
    left.classList.add("left");
    const circle = document.createElement("img");
    circle.src = uncheckedCircle;
    circle.height = 25;
    circle.classList.add("checkBox")
    left.appendChild(circle);
    box.appendChild(left);
    circle.addEventListener("mouseover", (e) => {
        circle.src = checkedCircle;
    })
    circle.addEventListener("mouseout", (e) => {
        circle.src = uncheckedCircle;
    })
    circle.addEventListener("click", (e) => {
        event.completed = event.completed === false;
        drawPage(page, tasks)
    })

    // CENTER
    // Title Bar
    const center = document.createElement("div");
    center.classList.add("center");
    const tBar = document.createElement("div");
    tBar.classList.add("tBar");
    const tits = document.createElement("div");
    tits.classList.add("tits");
    const icons = document.createElement("div");
    icons.classList.add("icons");

    bTitle.innerHTML = `${event.title}`;
    const editButton = document.createElement("img");
    editButton.src = edit;
    editButton.classList.add("editButton");
    editButton.height = 20;
    icons.appendChild(editButton);
    const deleteButton = document.createElement("img");
    deleteButton.classList.add("deleteButton");
    deleteButton.src = trash;
    deleteButton.height = 22;
    icons.appendChild(deleteButton);
    tits.append(bTitle);
    tBar.appendChild(tits);
    tBar.appendChild(icons);
    center.appendChild(tBar);

    // Description
    const dBox = document.createElement("div");
    dBox.classList.add("dBox");
    bDesc.innerHTML = `${event.desc}`;
    dBox.appendChild(bDesc);
    center.appendChild(dBox);

    // Dates
    const dateBox = document.createElement("div");
    dateBox.classList.add("dateBox");
    const dbl = document.createElement("div");
    dbl.classList.add("dbl");
    const dbr = document.createElement("div");
    dbr.classList.add("dbr");

    bDue.innerHTML = `Date Due: ${event.due}`;
    dbr.appendChild(bDue);

    bCreated.innerHTML = `Created: ${event.created}`;
    dbl.appendChild(bCreated);

    dateBox.appendChild(dbl);
    dateBox.appendChild(dbr);
    center.appendChild(dateBox);
    box.appendChild(center);

    // RIGHT
    const right = document.createElement("div");
    right.classList.add("right");
    // alert button
    const urgent = document.createElement("div");
    urgent.classList.add("urgent");
    const alertButton = document.createElement("img");
    alertButton.classList.add("alertButton");
    if (event.priority === true) {
        alertButton.src = alertYes;
    } else {
        alertButton.src = alertNo;
    }
    alertButton.height = 25;
    urgent.appendChild(alertButton);
    right.appendChild(urgent);
    // project assignment button
    const projects = document.createElement("div");
    projects.classList.add("project");
    const projectButton = document.createElement("img");
    projectButton.classList.add("projectButton");
    if (event.project === "none") {
        projectButton.src = project0;
    } else if (event.project === "project1") {
        projectButton.src = project1;
    } else if (event.project === "project2") {
        projectButton.src = project2;
    } else if (event.project === "project3") {
        projectButton.src = project3;
    } else if (event.project === "project4") {
        projectButton.src = project4;
    } else if (event.project === "project5") {
        projectButton.src = project5;
    } else {
        projectButton.src = project0;
    }
    projectButton.height = 25;
    projects.appendChild(projectButton);
    right.appendChild(projects);

    box.appendChild(right);
    content.appendChild(box);




}