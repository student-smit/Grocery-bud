document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('itemInput');
    const addItemButton = document.getElementById('addItemButton');
    const groceryList = document.getElementById('groceryList');

    addItemButton.addEventListener('click', () => {
        const itemValue = itemInput.value.trim();
        if (itemValue) {
            addItemToList(itemValue);
            itemInput.value = '';
            itemInput.focus();
        }
    });

    groceryList.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-button')) {
            event.target.parentElement.remove();
        } else if (event.target.classList.contains('edit-button')) {
            editItem(event.target.parentElement);
        } else if (event.target.tagName === 'LI') {
            event.target.classList.toggle('bought');
        }
    });

    function addItemToList(item) {
        const li = document.createElement('li');
        li.textContent = item;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');

        li.appendChild(editButton);
        li.appendChild(removeButton);
        groceryList.appendChild(li);
    }

    function editItem(listItem) {
        const currentText = listItem.firstChild.textContent.trim();
        const newText = prompt('Edit item:', currentText);
        if (newText !== null && newText.trim() !== '') {
            listItem.firstChild.textContent = newText.trim();
        }
    }
});

