import { bootstrapTag, cssTag, reactRouterTag, reactTag } from "./tags";
import todoapp from "../assets/projects/todoApp.png";
import heroesapp from "../assets/projects/heroesApp.png";
export const projects = [
  {
    id: "todoapp",
    position: 0,
    title: "ToDo App",
    desc: "In this project I made a CRUD application using the localstorage. This helped me to learn in a more deep level the useContext hook and how to use it side by side with the useState hook.",
    tags: [reactTag, cssTag],
    src: window.location.origin + "/assets/projects/todoApp.png",
    isHovered: false,
    githubURL: "https://github.com/arguitron/todo-app",
    webpageURL: "https://arguitron.github.io/todo-app/",
  },
  {
    id: "heroesapp",
    position: 1,
    title: "Heroes App",
    desc: "Using a local made JSON file, this application shows an array of objects in different pages in a SPA. The real intention behind this project was to learn the react router library, however I also used bootstrap for the styles and the localsotrage to be able to work with public and private routes.",
    tags: [reactTag, reactRouterTag, bootstrapTag],
    src: window.location.origin + "/assets/projects/heroesApp.png",
    isHovered: false,
    githubURL: "https://github.com/arguitron/heroes-app",
    webpageURL: "https://arguitron.github.io/heroes-app/",
  },
];
