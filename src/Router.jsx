import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "./Layout/Main";
import Contact from "./Pages/Home/Contact/Contact";
import Home from "./Pages/Home/Home/Home";
import Skill from "./Pages/Home/Skill/Skill";
import About from "./Pages/Home/About/About";
import Project from "./Pages/Home/Project/Project";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
     {
      path: '/skill',
      element: <Skill></Skill>
     },
     {
      path: '/project',
      element: <Project></Project>
     },
     {
      path: '/contact',
      element: <Contact></Contact>
    },
      
    ]
  },
]);