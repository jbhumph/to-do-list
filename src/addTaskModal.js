import {Task} from "./task";
import {loadHome} from "./homePage";

export const addTaskModal = (tasks) => {
    const modal = document.querySelector("#myModal");
    const closeModal = document.querySelector(".close");
    const submit = document.querySelector("#fSubmit");
    const title = document.querySelector("#fTitle");
    const description = document.querySelector("#fDesc");


    // Close on X
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    })

    // Close on window click
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }



}