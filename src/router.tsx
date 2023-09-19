import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import Project1 from "./routes/Project1";
import Project2 from "./routes/Project2";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
        {
            path: "",
            element: <Home />,
        },
        {
            path: "about/",
            element: <About />,
        },
        {
            path: "projects/",
            element: <Projects />,
        },
        {
            path: "projects/1",
            element: <Project1 />,
        },
        {
            path: "projects/2",
            element: <Project2 />,
        },
        {
            path: "contact/",
            element: <Contact />,
        },
        ],
    },
]);

export default router;
