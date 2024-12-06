// Helper function to format date and time
function getFormattedTime() {
    const now = new Date();
    return now.toLocaleString(); // Returns date and time in "MM/DD/YYYY, HH:MM:SS" format
  }
  
  document.getElementById('add-btn').addEventListener('click', function () {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();
  
    if (todoText === '') {
      alert('Please enter a task!');
      return;
    }
  
    const todoList = document.getElementById('todo-list');
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';
  
    // Create Checkbox Section
    const checkboxSection = document.createElement('div');
    checkboxSection.className = 'checkbox-section';
  
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
  
    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = todoText;
  
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
  
    checkboxSection.appendChild(checkbox);
    checkboxSection.appendChild(taskText);
    checkboxSection.appendChild(deleteBtn);
  
    // Timestamp Section
    const createdTime = document.createElement('span');
    createdTime.className = 'time-stamp';
    createdTime.textContent = `Created: ${getFormattedTime()}`;
  
    const completedTime = document.createElement('span');
    completedTime.className = 'time-stamp';
    completedTime.style.display = 'none'; // Initially hidden
  
    listItem.appendChild(checkboxSection);
    listItem.appendChild(createdTime);
    listItem.appendChild(completedTime);
  
    todoList.appendChild(listItem);
    todoInput.value = '';
  
    // Checkbox Event Listener
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        listItem.classList.add('completed');
        completedTime.textContent = `Completed: ${getFormattedTime()}`;
        completedTime.style.display = 'block'; // Show completion time
      } else {
        listItem.classList.remove('completed');
        completedTime.style.display = 'none'; // Hide completion time
      }
    });
  
    // Delete Button Event Listener
    deleteBtn.addEventListener('click', function () {
      listItem.remove();
    });
  });
  