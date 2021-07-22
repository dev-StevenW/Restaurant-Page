import frontPageImage from "./img/frontpage.jpg";

const content = document.querySelector("#content");
const make = function (el) {
  return document.createElement(el);
};

//Front page

//Nav Bar
function makeNavBar() {
  const navBar = make("nav");
  const navList = make("ul");
  const homeLink = make("li");
  const menuLink = make("li");
  const contactLink = make("li");

  homeLink.innerHTML = "<a id='homeLink' href='#'>Home</a>";
  menuLink.innerHTML = "<a id='menuLink' href='#'>Menu</a>";
  contactLink.innerHTML = "<a id='contactLink' href='#'>Contact</a>";

  navList.appendChild(homeLink);
  navList.appendChild(menuLink);
  navList.appendChild(contactLink);
  navBar.appendChild(navList);
  content.appendChild(navBar);
}

//Title
function makeTitle() {
  const titleWrap = make("div");
  const titleHead = make("h1");
  const subtitle = make("h2");

  titleWrap.classList.add("title");
  subtitle.classList.add("subtitle");

  titleHead.innerText = "Gloria's";
  subtitle.innerText = "Glorious Sandwiches";

  titleWrap.appendChild(titleHead);
  titleWrap.appendChild(subtitle);
  content.appendChild(titleWrap);
}
//Main

function makeFrontMain() {
  const mainWrap = make("div");
  const heading = make("div");
  const headingImgWrap = make("div");
  const headingImage = make("img");
  const headline = make("div");

  mainWrap.classList.add("frontpage-wrap");
  heading.classList.add("heading");
  headingImgWrap.classList.add("heading-image");
  headingImage.src = frontPageImage;
  headingImage.alt = "Photo of delicious sandwich";
  headline.classList.add("heading-headline");
  headline.innerText =
    "Crafting fresh sandwiches is our passion. Sourcing the finest ingredients from local resources to provide you with an unforgettable experience.";

  headingImgWrap.appendChild(headingImage);
  heading.appendChild(headingImgWrap);
  heading.appendChild(headline);
  mainWrap.appendChild(heading);
  content.appendChild(mainWrap);
}

export { makeNavBar, makeTitle, makeFrontMain };
