const insertButton = document.getElementById('insertButton');
const listInput = document.getElementById('listInput');
const listContainer = document.getElementById('list-container');
let list = [];

insertButton.addEventListener('click', function() {
  const inputValue = listInput.value.trim();

  // Check if input is not empty
  if (inputValue) {
    // Insert the new element at the end of the list
    list.push(inputValue);

    // Clear the input field
    listInput.value = '';

    // Display the updated list
    displayList();
  }
});

function displayList() {
  // Clear the existing list display
  listContainer.innerHTML = '';

  // Loop through the list and create elements for each item
  list.forEach((item, index) => {
    const listItem = document.createElement('div');
    listItem.classList.add('list-item');
    
    // If the item is the third in sequence, make it red
    if ((index + 1) % 3 === 0) {
      listItem.classList.add('third-item');
    }

    listItem.textContent = item;
    listContainer.appendChild(listItem);
  });
}