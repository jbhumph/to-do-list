import {loadHome} from "./homePage";

export const drawPage = (page, tasks) => {
    if (page === 0) {
        loadHome(tasks)
    }
}