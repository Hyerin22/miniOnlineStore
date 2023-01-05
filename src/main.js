// fech the items from JSON file
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

function createHTMLString(list){
  return `
    <li class="list">
      <img src="${list.image}" alt="${list.type}" class="list-thumnail"/>
      <span class="list-desc">${list.gender}, ${list.size}</span>
    </li>
  `;
}

loadData()
.then(data => {
  displayItems(data);
})
.catch(console.log);