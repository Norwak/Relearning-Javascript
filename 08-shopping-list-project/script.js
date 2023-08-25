const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formBtn = itemForm.querySelector('button');
let isEditMode = false;

function createIcon(classList) {
  const icon = document.createElement('i');
  icon.className = classList;
  return icon;
}

function createButton(classList) {
  const button = document.createElement('button');
  button.className = classList;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function checkUI() {
  const items = itemList.querySelectorAll('li');

  if (items.length === 0) {
    clearButton.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearButton.style.display = 'block';
    itemFilter.style.display = 'block';
  }

  formBtn.querySelector('i').className = 'fa-solid fa-plus';
  formBtn.lastChild.textContent = ' Add Item';
  formBtn.style.backgroundColor = '#333';

  isEditMode = false;
}

function addItemToDOM(item) {
  // Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  itemList.appendChild(li);
}

function getItemsFromStorage() {
  if (localStorage.getItem('items') !== null) {
    return JSON.parse(localStorage.getItem('items'));
  } else {
    return [];
  }
}

function addItemToStorage(item) {
  let items = getItemsFromStorage();

  items.push(item);

  localStorage.setItem('items', JSON.stringify(items));
}

function removeItemFromStorage(targetItem) {
  let items = getItemsFromStorage();

  items = items.filter(item => item !== targetItem);

  localStorage.setItem('items', JSON.stringify(items));
}

function onAddItemSubmit(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate input
  if (newItem === '') {
    alert('Please enter an item');
    itemInput.focus();
    return;
  }

  if (isEditMode) {
    const itemToEdit = itemList.querySelector('.edit-mode');

    removeItemFromStorage(itemToEdit.firstChild.textContent);
    itemToEdit.classList.remove('edit-mode');
    itemToEdit.remove();
  } else {
    if (itemExists(newItem)) {
      alert('That item already exists');
      return;
    }
  }

  addItemToDOM(newItem);
  addItemToStorage(newItem);

  // Clear input
  itemInput.value = '';

  checkUI();
}

function removeItem(item) {
  if (confirm('Are you sure you want to delete this item?')) {
    item.remove();

    removeItemFromStorage(item.firstChild.textContent);

    checkUI();
  }
}

function setItemToEdit(targetItem) {
  isEditMode = true;

  const items = itemList.querySelectorAll('li');
  for (const item of items) {
    item.classList.remove('edit-mode');
  }

  targetItem.classList.add('edit-mode');

  formBtn.querySelector('i').className = 'fa-solid fa-pen';
  formBtn.lastChild.textContent = ' Update Item';
  formBtn.style.backgroundColor = '#228b22';

  itemInput.value = targetItem.textContent;
}

function onClickItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    removeItem(e.target.parentElement.parentElement);
  } else {
    setItemToEdit(e.target);
  }
}

function itemExists(targetItem) {
  const items = getItemsFromStorage();
  return items.includes(targetItem);
}

function clearItems(e) {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  localStorage.removeItem('items');

  checkUI();
}

function filterItems(e) {
  const searchText = e.target.value.toLowerCase().trim();

  const items = itemList.querySelectorAll('li');

  for (const item of items) {
    const title = item.firstChild.textContent.toLowerCase().trim();

    if (title.includes(searchText)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  }
}

function displayItems(e) {
  const items = getItemsFromStorage();

  for (const item of items) {
    addItemToDOM(item);
  }

  checkUI();
}

function init() {
  // Event Listeners
  itemForm.addEventListener('submit', onAddItemSubmit);
  itemList.addEventListener('click', onClickItem);
  clearButton.addEventListener('click', clearItems);
  itemFilter.addEventListener('input', filterItems);
  document.addEventListener('DOMContentLoaded', displayItems);

  checkUI();
}

init();