// fetch the items from JSON file
function loadData(){
  return fetch('data/data.json')
  .then(response => response.json())
  .then(json => json.items);
}

// update the list with the given items
function displayItems(data){
  const dataContainer = document.querySelector('.data');
  dataContainer.innerHTML = data.map(list => createHTMLString(list)).join('');

}

// create HTML list item from the given data 
function createHTMLString(list){
  return `
    <li class="list">
      <img src="${list.image}" alt="${list.type}" class="list-thumnail"/>
      <span class="list-desc">${list.gender}, ${list.size}</span>
    </li>
  `;
}

function onBttnClick(event, data){
  // console.log("key is " + event.target.dataset.key)
  // console.log("value is " + event.target.dataset.value)

  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if(key == null || value == null){
    return;
  }

  const filtered = data.filter(list => list[key] === value);
  console.log(filtered)
  displayItems(filtered);
}

function setEventListeners(data){
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.bodyContent');
  logo.addEventListener('click', () => displayItems(data));
  buttons.addEventListener('click', event => onBttnClick(event, data));
}

// main
loadData()
.then(data => {
  displayItems(data);
  setEventListeners(data);
})
.catch(console.log);