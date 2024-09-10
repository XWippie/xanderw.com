document.addEventListener("DOMContentLoaded", function () {
  startNav();
});

const startNav = function () {
  let toggleTrigger = document.querySelectorAll(".js-toggle-nav");

  for (let i = 0; i < toggleTrigger.length; i++) {
    toggleTrigger[i].addEventListener("click", function () {
      document.querySelector("body").classList.toggle("has-mobile-nav");
    });
  }

  const links = document.querySelectorAll(".js-nav-link");

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      changeIsSelected(links, links[i]);
    });
  }
};

const changeIsSelected = function (links, selectedLink) {
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove("is-selected");
  }

  let dataValue = selectedLink.getAttribute("data-id");
  let elements = document.querySelectorAll("[data-id=" + dataValue + "]");
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add("is-selected");
  }
};
