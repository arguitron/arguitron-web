let js = ["tag-txt-jquery", "tag-txt-express", "tag-txt-nodejs"];

let css = ["tag-txt-bootstrap"];
let git = ["tag-txt-github"];
let html = [""];
let python = [""];
let content = "";

let skills = {
  js: {
    class: ".fa-js-square",
    tags: ["tag-txt-jquery", "tag-txt-express", "tag-txt-nodejs"],
  },
  css: {
    class: ".fa-css3-alt",
    tags: ["tag-txt-bootstrap"],
  },
  git: {
    class: ".fa-git-alt",
    tags: ["tag-txt-github"],
  },
  html: {
    class: ".fa-html5",
    tags: ["tag-txt-pending"],
  },
  python: {
    class: ".fa-python",
    tags: ["tag-txt-pending"],
  },
};

for (let key in skills) {
  document
    .querySelector(skills[key]["class"])
    .addEventListener("mouseover", function () {
      content = "";

      skills[key]["tags"].map((tagClass) => {
        content += `<div class="tag-container">
      <div class="tag">
      <p class=${tagClass}>${
          tagClass.split("-")[tagClass.split("-").length - 1]
        }</p>
    </div>
    </div>`;
      });

      document.querySelector(".tools").innerHTML = content;
    });
}
