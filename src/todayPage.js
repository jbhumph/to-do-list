export const loadToday = () => {
    const content = document.querySelector('.content');
    const title = document.createElement("h1");
    title.innerText = "Due Today";
    content.appendChild(title);
}