export const loadUpcoming = () => {
    const content = document.querySelector('.content');
    const title = document.createElement("h1");
    title.innerText = "Upcoming Tasks";
    content.appendChild(title);
}