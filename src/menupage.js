const content = document.querySelector("#content");
const make = function (el) {
  return document.createElement(el);
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export function makeMenu() {
  const menuData = [
    {
      name: "Reuben",
      price: "9",
      description:
        "Rye bread, corned beef, Swiss cheese, kraut, and Thousand Island dressing.",
    },
    {
      name: "Bánh Mì",
      price: "11",
      description:
        "French baguette, cold cuts, pâté, pickled veggies, cilantro,jalapeños, and creamy mayonnaise.",
    },
    {
      name: "BLT",
      price: "7",
      description: "Multigrain bread, bacon, lettuce, tomato.",
    },
    {
      name: "Croque Monsieur",
      price: "12",
      description: "Pullman loaf, ham, gruyere, bechamel, grainy mustard.",
    },
    {
      name: "Cheesesteak",
      price: "12",
      description: "Sub bun, sliced ribeye, grilled onion, havarti cheese.",
    },
  ];

  const menuWrap = make("div");
  menuWrap.classList.add("menu-wrap");
  const menu = make("div");
  menu.classList.add("menu");

  menuData.forEach((item) => {
    const menuItem = make("div");
    menuItem.classList.add("menu-item");
    const title = make("h3");
    title.innerText = item.name;
    menuItem.appendChild(title);
    const price = make("span");
    price.innerText = item.price;
    price.classList.add("price");
    menuItem.appendChild(price);
    const description = make("p");
    description.innerText = item.description;
    menuItem.appendChild(description);
    menu.appendChild(menuItem);
  });

  menuWrap.appendChild(menu);
  content.appendChild(menuWrap);
}
