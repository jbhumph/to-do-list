export const loadHome = () => {
    const content = document.querySelector('.content');
    const title = document.createElement("h1");
    title.innerText = "Home Page";
    content.appendChild(title);
}