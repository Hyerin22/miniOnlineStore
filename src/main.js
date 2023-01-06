// fetch the items from JSON file
function loadData() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

// update the list with the given items
function displayItems(data) {
  const dataContainer = document.querySelector(".data");
  dataContainer.innerHTML = data.map((list) => createHTMLString(list)).join("");
}

// create HTML list item from the given data
function createHTMLString(list) {
  return `
    <li class="list">
      <img src="${list.image}" alt="${list.type}" class="list-thumnail"/>
      <span class="list-desc">${list.gender}, ${list.size}</span>
    </li>
  `;
}

// filtering
function onBttnClick(event, data) {
  // console.log("key is " + event.target.dataset.key)
  // console.log("value is " + event.target.dataset.value)

  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return;
  }

  const filtered = data.filter((list) => list[key] === value);
  console.log(filtered);
  displayItems(filtered);
}

function setEventListeners(data) {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".bodyContent");
  logo.addEventListener("click", () => displayItems(data));
  buttons.addEventListener("click", (event) => onBttnClick(event, data));
}


// Darkmode icon img change
function chngimg(){
  var toggleImg = document.querySelector(".switchMode").src
  if (toggleImg.indexOf('Moon.png') != -1) {
    document.querySelector(".switchMode").src = "img/Sun.png";
  } else {
    document.querySelector(".switchMode").src = "img/Moon.png";
  }
}

// Dark mode
function darkMode() {
  var background = document.body;
  background.classList.toggle("dark-mode");

  const toggleButton = document.querySelector(".toggle");
  toggleButton.classList.toggle("toogle-darkMode");

  document.querySelector(".blue").classList.toggle("blue-darkMode");
  document.querySelector(".yellow").classList.toggle("yellow-darkMode");
  document.querySelector(".pink").classList.toggle("pink-darkMode");
}

// main
loadData()
  .then((data) => {
    displayItems(data);
    setEventListeners(data);
  })
  .catch(console.log);
