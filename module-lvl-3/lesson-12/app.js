import "./style.css";

// 1) New game 2) Quit
// 2) Pick hero

// destruct
// const { name, age } = john;

// console.log("[name]", name);
// console.log("[age]", age);

// const users = ["John", "Bob", {}];
// const [kek] = users;

// console.log(users);
// console.log(...users);

// console.log(kek);

const app = document.getElementById("app");
const battlePlace = document.getElementById("battle-place");
const contextMenu = document.getElementById("context-menu");

class Hero {
  constructor(option) {
    const { nickname, damage, hp, imageURL, className, id } = option;

    if (!nickname) return alert("There isn't nickname");

    this.nickname = nickname;
    this.damage = damage;
    this.id = id;
    this.className = className;
    this.imageURL = imageURL;
    this.hp = hp;

    this.text = `
    <h2>Nickname : ${this.nickname}</h2>
    <div class="image-wrapper">
        <img class="image" src=${this.imageURL} />
    </div>
    <h3> HP : ${this.hp} </h3>
    <h3> Damage : ${this.damage} </h3>
    <div class="input-wrapper">
        <input type=range
        max=${this.hp} disabled value="100" />
    </div>
    `;
  }
}

const heroes = [
  new Hero({
    className: "hero",
    id: "john's-hero",
    nickname: "John",
    damage: 27,
    hp: 100,
    imageURL:
      "https://imgix.bustle.com/uploads/image/2017/9/8/efd6deec-1953-4d52-9b7a-8b23b1620023-screen-shot-2017-09-07-at-23516-pm.png?w=800&fit=crop&crop=faces&auto=format%2Ccompress",
  }),

  new Hero({
    className: "hero",
    id: "Bob's-hero",
    nickname: "Bob",
    damage: 33,
    hp: 100,
    imageURL:
      "https://cdn.vox-cdn.com/thumbor/sxZ2wXVmXIS976wIC_9yGwIXzIk=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9410113/MTS_simgazer_1589392_Helga.jpg",
  }),
];

const buttons = [
  {
    tag: "button",
    id: "new-game",
    text: "New game",
    className: ["button"],
    events: {
      click: (e) => {
        e.preventDefault();

        startGame();
      },
    },
  },

  {
    tag: "button",
    id: "quit",
    text: "Quit",
    className: ["button"],
    events: {
      click: (e) => {
        e.preventDefault(e.target);
      },
    },
  },
];

const htmlButtons = arrToHTML(buttons, true);

append(contextMenu, htmlButtons);

function startGame(targetEl) {
  const currentElement = targetEl;

  const currentElementCn = currentElement.className;

  if (currentElementCn.includes("disabled"))
    throw Error("What do you want to do ? ");

  currentElement.classList.add("disabled");

  const contextMenuStyle = contextMenu.style;

  //!!! Dunder mission
  contextMenuStyle.justifyContent = "end";
  contextMenuStyle.paddingBottom = "2rem";
  contextMenuStyle.height = "35rem";

  let battlePlaceCn = battlePlace.className;

  if (battlePlaceCn.includes("disabled")) {
    battlePlaceCn = battlePlaceCn.slice(0, battlePlaceCn.indexOf("disabled"));
  }
}

function arrToHTML(arr, isWrapped = false) {
  const html = arr.map((el) => {
    if (isWrapped) {
      return wrappHTMLElement(toTag(el));
    }
    return toTag(el);
  });

  return html;
}

function wrappHTMLElement(el) {
  const wrapper = document.createElement("div");

  wrapper.className = el.className + "__wrapper";

  append(wrapper, el);
  return wrapper;
}

function toTag(obj) {
  // destruct
  const { id, text, className, events, tag = "div" } = obj;

  const element = document.createElement(tag);

  element.className = className;
  element.id = id;

  element.insertAdjacentHTML("afterbegin", text);

  for (const key in events) {
    const value = events[key];

    element.addEventListener(key, value);
  }

  return element;
}

function append(parentNode, children) {
  if (Array.isArray(children)) return parentNode.append(...children);

  parentNode.append(children);
}
