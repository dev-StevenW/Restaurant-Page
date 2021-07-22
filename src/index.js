import { makeFrontMain, makeNavBar, makeTitle } from "./frontpage.js";
import { makeMenu } from "./menupage.js";
import { makeContactForm } from "./contactpage.js";
import "./style.css";

const content = document.querySelector("#content");

function addListeners() {
  const homeButton = document.querySelector("#homeLink");
  homeButton.addEventListener("click", makeFrontPage);
  const menuButton = document.querySelector("#menuLink");
  menuButton.addEventListener("click", makeMenuPage);
  const contactButton = document.querySelector("#contactLink");
  contactButton.addEventListener("click", makeContactPage);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function makeFrontPage() {
  removeAllChildNodes(content);
  makeNavBar();
  addListeners();
  makeTitle();
  makeFrontMain();
}

function makeMenuPage() {
  removeAllChildNodes(content);
  makeNavBar();
  addListeners();
  makeTitle();
  makeMenu();
}

function makeContactPage() {
  removeAllChildNodes(content);
  makeNavBar();
  addListeners();
  makeContactForm();
}

makeFrontPage();
