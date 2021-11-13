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
    tags: [],
  },
  python: {
    class: ".fa-python",
    tags: [],
  },
};

document
  .querySelector(".fa-js-square")
  .addEventListener("mouseover", function () {
    content = "";

    js.map((tagClass) => {
      content += `<div class="tag">
      <p class=${tagClass}>${
        tagClass.split("-")[tagClass.split("-").length - 1]
      }</p>
    </div>`;
    });
    document.querySelector(".tools").innerHTML = content;
  });

document
  .querySelector(".fa-css3-alt")
  .addEventListener("mouseover", function () {
    content = "";

    css.map((tagClass) => {
      content += `<div class="tag">
      <p class=${tagClass}>${
        tagClass.split("-")[tagClass.split("-").length - 1]
      }</p>
    </div>`;
    });
    document.querySelector(".tools").innerHTML = content;
  });

document.querySelector(".fa-html5").addEventListener("mouseover", function () {
  content = "";

  html.map((tagClass) => {
    content += `<div class="tag">
      <p class=${tagClass}>${
      tagClass.split("-")[tagClass.split("-").length - 1]
    }</p>
    </div>`;
  });
  document.querySelector(".tools").innerHTML = content;
});

document
  .querySelector(".fa-git-alt")
  .addEventListener("mouseover", function () {
    content = "";

    git.map((tagClass) => {
      content += `<div class="tag">
      <p class=${tagClass}>${
        tagClass.split("-")[tagClass.split("-").length - 1]
      }</p>
    </div>`;
    });
    document.querySelector(".tools").innerHTML = content;
  });

document.querySelector(".fa-python").addEventListener("mouseover", function () {
  content = "";

  python.map((tagClass) => {
    content += `<div class="tag">
      <p class=${tagClass}>${
      tagClass.split("-")[tagClass.split("-").length - 1]
    }</p>
    </div>`;
  });
  document.querySelector(".tools").innerHTML = content;
});
