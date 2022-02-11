import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

const onProgress = {
  id: "onp1",
  name: "currently learning...",
  bgColor: "blue",
  color: "#fff",
};

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
    isSubskills: false,
    subSkills: [onProgress],
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
    isSubskills: false,
    subSkills: [onProgress],
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
    isSubskills: false,
    subSkills: [
      {
        id: "reactjs",
        name: "reactjs",
        bgColor: "#000",
        color: "blue",
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
    isSubskills: false,
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
    isSubskills: false,
    subSkills: [onProgress],
  },
];
