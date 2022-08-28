console.log('To-Do-List');

/*Let us start with the let's and DOM's*/

let enterButton = document.getElementById('enter');
let inputField = document.getElementById('userInput');
let unorderList = document.querySelector('ul');
let item = document.getElementsByTagName('li');

/*Some functions*/
function inputLength() {
  return inputField.value.length;
}

function listLength() {
  return item.length;
}

/*Create new Elements*/
function createListElement() {
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(inputField.value));
  unorderList.appendChild(li);
  inputField.value = '';

  function doneIt() {
    li.classList.toggle('done');
  }

  li.addEventListener('click', doneIt);

  /*Create btn for delete*/
  let deleteBtn = document.createElement('button');
  deleteBtn.appendChild(document.createTextNode('Delete'));
  li.appendChild(deleteBtn);
  deleteBtn.addEventListener('click', deleteListItem);

  function deleteListItem() {
    li.classList.add('delete');
  }
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
}

/*Some more Event-listener*/
enterButton.addEventListener('click', addListAfterClick);

inputField.addEventListener('keypress', addListAfterKeypress);

/*Struggle with the locale.storage. localeStorage.setItem()*/
