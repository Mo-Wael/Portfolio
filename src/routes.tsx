import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import Experiences from "./Pages/Experiences";
import FirstPage from "./Pages/FirstPage";
import ProjectsPage from "./Pages/ProjectsPage";

export const routers = [
    {path: "/", component: FirstPage, index: true},
    {path: "/Education", component: Education},
    {path: "/Experiences", component: Experiences},
    {path: "/Projects", component: ProjectsPage},
    {path: "/Contact", component: Contact}
]