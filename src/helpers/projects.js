const reactTag = {
  id: "reactjsTag",
  name: "reactjs",
  bgColor: "#2C3333",
  color: "#398AB9",
};

const reactRouterTag = {
  id: "reactRouterTag",
  name: "react-router",
  bgColor: "#BB004B",
  color: "#fff",
};

const styledComponentsTag = {
  id: "styledComponentsTag",
  name: "styled-components",
  bgColor: "#FF5C8D",
  color: "#fff",
};

const html5Tag = {
  id: "html5Tag",
  name: "html",
  bgColor: "orange",
  color: "#fff",
};

const cssTag = {
  id: "cssTag",
  name: "css",
  bgColor: "#2940D3",
  color: "#fff",
};

const postCssTag = {
  id: "postCssTag",
  name: "post-css",
  bgColor: "#fff",
  color: "orange",
};

const bootstrapTag = {
  id: "bootstrapTag",
  name: "bootstrap",
  bgColor: "purple",
  color: "#fff",
};

const jsTag = {
  id: "jsTag",
  name: "javascript",
  bgColor: "yellow",
  color: "#000",
};

const gitTag = {
  id: "gitTag",
  name: "git",
  bgColor: "orange",
  color: "#fff",
};

const githubTag = {
  id: "githubTag",
  name: "github",
  bgColor: "#000",
  color: "#fff",
};

export const projects = [
  {
    id: "todoapp",
    title: "ToDo App",
    desc: "In this project I made a CRUD application using the localstorage. This helped me to learn in a more deep level the useContext hook and how to use it side by side with the useState hook.",
    tags: [reactTag, cssTag],
    src: "/assets/projects/todoApp.png",
  },
  {
    id: "heroesapp",
    title: "Heroes App",
    desc: "Using a local made JSON file, this application shows an array of objects in different pages in a SPA. The real intention behind this project was to learn the react router library, however I also used bootstrap for the styles and the localsotrage to be able to work with public and private routes.",
    tags: [reactTag, reactRouterTag, bootstrapTag],
    src: "/assets/projects/heroesApp.png",
  },
];
