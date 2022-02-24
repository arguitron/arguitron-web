import { bootstrapTag, cssTag, reactRouterTag, reactTag } from "./tags";

export const projects = [
  {
    id: "todoapp",
    position: 0,
    title: "ToDo App",
    desc: "In this project I made a CRUD application using the localstorage. This helped me to learn in a more deep level the useContext hook and how to use it side by side with the useState hook.",
    tags: [reactTag, cssTag],
    src: "/assets/projects/todoApp.png",
    isHovered: false,
  },
  {
    id: "heroesapp",
    position: 1,
    title: "Heroes App",
    desc: "Using a local made JSON file, this application shows an array of objects in different pages in a SPA. The real intention behind this project was to learn the react router library, however I also used bootstrap for the styles and the localsotrage to be able to work with public and private routes.",
    tags: [reactTag, reactRouterTag, bootstrapTag],
    src: "/assets/projects/heroesApp.png",
    isHovered: false,
  },
];
