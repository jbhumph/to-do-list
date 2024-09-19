import uncheckedCircle from "./images/circle-unchecked.svg";
import checkedCircle from "./images/circle-checked.svg";
import edit from "./images/edit.svg";
import trash from "./images/delete.svg";
import alertYes from "./images/alertYes.svg";
import alertNo  from "./images/alertNo.svg";
import project0 from "./images/project0.svg";

const content = document.querySelector('.content');


export function Task(title, desc, due, created, project, priority, completed) {
    this.title = title
    this.desc = desc;
    this.due = due;
    this.created = created;
    this.project = project;
    this.priority = priority;
    this.completed = completed;


}

Task.prototype.printDesc = function() {
    const box = document.createElement("div");
    box.classList.add("taskBox");
    const bTitle = document.createElement("div");
    const bDesc = document.createElement("div");
    const bDue = document.createElement("div");
    const bCreated = document.createElement("div");

    // Checkbox
    const left = document.createElement("div");
    left.classList.add("left");
    const circle = document.createElement("img");
    circle.src = uncheckedCircle;
    circle.height = 25;
    left.appendChild(circle);
    box.appendChild(left);
    circle.addEventListener("mouseover", (e) => {
        circle.src = checkedCircle;
    })
    circle.addEventListener("mouseout", (e) => {
        circle.src = uncheckedCircle;
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

    bTitle.innerHTML = `${this.title}`;
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
    bDesc.innerHTML = `${this.desc}`;
    dBox.appendChild(bDesc);
    center.appendChild(dBox);

    // Dates
    const dateBox = document.createElement("div");
    dateBox.classList.add("dateBox");
    const dbl = document.createElement("div");
    dbl.classList.add("dbl");
    const dbr = document.createElement("div");
    dbr.classList.add("dbr");

    bDue.innerHTML = `Date Due: ${this.due}`;
    dbr.appendChild(bDue);

    bCreated.innerHTML = `Created: ${this.created}`;
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
    alertButton.src = alertYes;
    alertButton.height = 25;
    urgent.appendChild(alertButton);
    right.appendChild(urgent);
        // project assignment button
    const projects = document.createElement("div");
    projects.classList.add("project");
    const projectButton = document.createElement("img");
    projectButton.classList.add("projectButton");
    projectButton.src = project0;
    projectButton.height = 25;
    projects.appendChild(projectButton);
    right.appendChild(projects);


    box.appendChild(right);
    content.appendChild(box);
}