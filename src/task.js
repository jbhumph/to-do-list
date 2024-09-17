const content = document.querySelector('.content');

export function Task(title, desc) {
    this.title = title
    this.desc = desc;
    /*--
    this.due = due;
    this.created = created;
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

    bTitle.innerHTML = `${this.title}`;
    box.appendChild(bTitle);
    box.appendChild(bDesc);
    bDesc.innerHTML = `${this.desc}`;

    content.appendChild(box);
}