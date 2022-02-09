import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

export const skills = [
  {
    id: "faHtml5",
    name: "html",
    icon: faHtml5,
    iconColor: "orange",
    tag: {
      bgColor: "orange",
      color: "#fff",
    },

    subSkills: [],
  },
  {
    id: "faCss3Alt",
    name: "css",
    icon: faCss3Alt,
    iconColor: "blue",
    tag: {
      bgColor: "blue",
      color: "#fff",
    },

    subSkills: [],
  },
  {
    id: "faJsSquare",
    name: "javascript",
    icon: faJsSquare,
    iconColor: "yellow",
    tag: {
      bgColor: "yellow",
      color: "#000",
    },
    subSkills: [
      {
        id: "reactjs",
        name: "reactjs",
        bgColor: "blue",
        color: "#fff",
      },
    ],
  },
  {
    id: "faReact",
    name: "reactjs",
    icon: faReact,
    iconColor: "blue",
    tag: {
      bgColor: "blue",
      color: "#fff",
    },
    subSkills: [
      {
        id: "reactRouter",
        name: "react-router",
        bgColor: "red",
        color: "#fff",
      },
      {
        id: "styledComponents",
        name: "styled-components",
        bgColor: "pink",
        color: "#fff",
      },
    ],
  },
  {
    id: "faGitAlt",
    name: "git",
    icon: faGitAlt,
    iconColor: "orange",
    tag: {
      bgColor: "orange",
      color: "#fff",
    },
    subSkills: [],
  },
];
