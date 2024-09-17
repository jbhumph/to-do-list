const content = document.querySelector('.content');

export function Task(title, desc, due, created) {
    this.title = title
    this.desc = desc;
    this.due = due;
    this.created = created;
    /*--
    this.project = project;
    this.priority = priority;
    this.completed = completed;
    --*/


}

Task.prototype.printDesc = function() {
    const box = document.createElement("div");
    box.classList.add("taskBox");
    const bTitle = document.createElement("div");
    const bDesc = document.createElement("div");
    const bDue = document.createElement("div");
    const bCreated = document.createElement("div");

    bTitle.innerHTML = `${this.title}`;
    box.appendChild(bTitle);

    bDesc.innerHTML = `${this.desc}`;
    box.appendChild(bDesc);

    bDue.innerHTML = `Date Due: ${this.due}`;
    box.appendChild(bDue);

    bCreated.innerHTML = `Created: ${this.created}`;
    box.appendChild(bCreated);

    content.appendChild(box);
}