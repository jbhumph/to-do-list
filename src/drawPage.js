/* -----
KEY:
0 = Home Page
1 = Due Today
2 = Upcoming

3 = project 1
4 = project 2
5 = project 3
6 = project 4
7 = project 5
 */

import {loadHome} from "./homePage";
import {loadToday} from "./todayPage";
import {loadUpcoming} from "./upcomingPage";
import {loadProjectPage} from "./projectPage";

export const drawPage = (page, tasks) => {
    if (page === 0) {
        loadHome(tasks)
    } else if (page === 1) {
        loadToday(tasks)
    } else if (page === 2) {
        loadUpcoming(tasks)
    } else if (page === 3) {
        loadProjectPage(tasks, 1)
    } else if (page === 4) {
        loadProjectPage(tasks, 2)
    } else if (page === 5) {
        loadProjectPage(tasks, 3)
    } else if (page === 6) {
        loadProjectPage(tasks, 4)
    } else if (page === 7) {
        loadProjectPage(tasks, 5)
    }
}