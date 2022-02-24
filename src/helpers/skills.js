import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import styledComponents from "styled-components";
import {
  bootstrapTag,
  cssTag,
  githubTag,
  gitTag,
  html5Tag,
  jsTag,
  reactRouterTag,
  reactTag,
  styledComponentsTag,
} from "./tags";

const onProgress = {
  id: "onp1",
  name: "currently learning...",
  bgColor: "gray",
  color: "#fff",
};

export const skills = [
  {
    id: "faHtml5",
    name: "html",
    icon: faHtml5,
    iconColor: "orange",
    tag: html5Tag,
    isSubskills: false,
    subSkills: [onProgress],
  },
  {
    id: "faCss3Alt",
    name: "css",
    icon: faCss3Alt,
    iconColor: "blue",
    tag: cssTag,
    isSubskills: false,
    subSkills: [
      {
        ...bootstrapTag,
        id: "bootStrap",
      },
    ],
  },
  {
    id: "faJsSquare",
    name: "javascript",
    icon: faJsSquare,
    iconColor: "yellow",
    tag: jsTag,
    isSubskills: false,
    subSkills: [
      {
        ...reactTag,
        id: "reactjs",
      },
    ],
  },
  {
    id: "faReact",
    name: "reactjs",
    icon: faReact,
    iconColor: "#2666CF",
    tag: reactTag,
    isSubskills: false,
    subSkills: [
      {
        ...reactRouterTag,
        id: "reactRouter",
      },
      {
        ...styledComponentsTag,
        id: "styledComponents",
      },
    ],
  },
  {
    id: "faGitAlt",
    name: "git",
    icon: faGitAlt,
    iconColor: "orange",
    tag: gitTag,
    isSubskills: false,
    subSkills: [
      {
        ...githubTag,
        id: "gitHub",
      },
    ],
  },
];
