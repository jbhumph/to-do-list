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
