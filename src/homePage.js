export const loadHome = (tasks) => {
    const content = document.querySelector('.content');
    const title = document.createElement("h1");
    content.innerHTML = "";
    title.innerText = "Home Page";
    content.appendChild(title);


    if (tasks.length > 0) {
        tasks.forEach((task) => {
            task.printDesc()
        })
    }
}