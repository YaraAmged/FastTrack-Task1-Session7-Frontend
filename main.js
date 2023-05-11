const card = {
  title: "card title",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolor praesentium ipsa.",
};
const container = document.createElement("div");
container.classList.add("container");

const cardsWrapper = document.createElement("div");
cardsWrapper.classList.add("row");

const themeButtons = document.createElement("div");
themeButtons.classList.add(
  "d-flex",
  "gap-4",
  "mt-4",
  "theme-buttons",
  "justify-content-sm-start"
);

const blueButton = document.createElement("button");
blueButton.classList.add("rounded-circle", "p-4", "bg-primary", "border-0");

const yellowButton = document.createElement("button");
yellowButton.classList.add("rounded-circle", "p-4", "bg-warning", "border-0");

themeButtons.append(blueButton, yellowButton);
container.append(themeButtons);
const cardsElements = [];
for (let i = 0; i < 4; i++) {
  const cardholder = document.createElement("div");
  cardholder.classList.add("col-12", "col-sm-4");
  const cardElement = document.createElement("div");
  cardElement.classList.add(
    "card",
    "d-flex",
    "flex-sm-row",
    "flex-column",
    "p-5",
    "mt-4",
    "align-items-center",
    "gap-5",
    "bg-primary",
    "text-white",
    "mb-4"
  );
  const dataholder = document.createElement("div");
  const cardTitle = document.createElement("h5");
  cardTitle.innerText = card.title;
  const cardContent = document.createElement("p");
  cardContent.innerText = card.content;
  dataholder.append(cardTitle, cardContent);
  const cardButton = document.createElement("button");
  cardButton.classList.add("bg-danger", "text-white", "border-0", "rounded");
  cardButton.innerText = "Delete";
  cardElement.append(dataholder, cardButton);
  cardholder.append(cardElement);
  cardsWrapper.append(cardholder);
  container.append(cardsWrapper);
  document.body.appendChild(container);
  cardsElements.push(cardElement);
  cardButton.onclick = function () {
    cardholder.remove();
  };
}

yellowButton.onclick = function () {
  cardsElements.forEach((ele) =>
    ele.classList.replace("bg-primary", "bg-warning")
  );
};
blueButton.onclick = function () {
  cardsElements.forEach((ele) =>
    ele.classList.replace("bg-warning", "bg-primary")
  );
};
