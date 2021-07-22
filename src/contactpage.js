const content = document.querySelector("#content");
const make = function (el) {
  return document.createElement(el);
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export function makeContactForm() {
  const title = make("h1");
  title.innerText = "Contact us";
  title.classList.add("content-title");
  content.appendChild(title);
  const description = make("p");
  description.innerText =
    "If you have any special requests, questions or are seeking emplyment opportunities please fill out this form and we'll be happy to get back to you.";

  description.classList.add("content-description");
  content.appendChild(description);

  const form = make("form");
  form.classList.add("contact-form");

  const inputWrap = make("div");
  inputWrap.classList.add("inputs-wrap");

  const nameLabel = make("label");
  nameLabel.for = "name";
  nameLabel.innerText = "Name";

  const nameInput = make("input");
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.id = "name";

  const emailLabel = make("label");
  emailLabel.for = "email";

  const emailInput = make("input");
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.id = "email";

  const commentWrap = make("div");
  commentWrap.classList.add("comment-wrap");
  const commentLabel = make("label");
  commentLabel.for = "comment";
  commentLabel.innerText = "Enter your inquiry here";
  commentWrap.appendChild(commentLabel);
  const commentText = make("textarea");
  commentText.name = "comment";
  commentText.id = "comment";
  commentText.cols = "30";
  commentText.rows = "5";
  commentWrap.appendChild(commentText);

  inputWrap.appendChild(nameLabel);
  inputWrap.appendChild(nameInput);
  inputWrap.appendChild(emailLabel);
  inputWrap.appendChild(emailInput);

  form.appendChild(inputWrap);
  form.appendChild(commentWrap);

  content.appendChild(form);
}
