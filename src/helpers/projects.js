const reactTag = {
  id: "reactjsTag",
  name: "reactjs",
  bgColor: "#2C3333",
  color: "#398AB9",
};

const reactRouterTag = {
  id: "reactRouterTag",
  name: "react-router",
  bgColor: "red",
  color: "#fff",
};

const styledComponentsTag = {
  id: "styledComponentsTag",
  name: "styled-components",
  bgColor: "pink",
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
  bgColor: "blue",
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

export const projects = [
  {
    id: "todoapp",
    title: "ToDo App",
    desc: "This is a very large and in depth description",
    tags: [reactTag, cssTag],
    src: "/assets/projects/todoApp.png",
  },
  {
    id: "heroesapp",
    title: "Heroes App",
    desc: "This is a very large and in depth description",
    tags: [reactTag, reactRouterTag],
    src: "/assets/projects/heroesApp.png",
  },
];
