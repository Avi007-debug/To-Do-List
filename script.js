function showToast(message) {
  const toast = document.getElementById('toast');
  toast.innerText = message;
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 2000);
}

// --- Task logic ---

function createTaskElement(text) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.className = 'task-text';
  span.innerText = text;
  span.onclick = function () {
    li.classList.toggle('completed');
    updateTaskCount();
  };

  const btnGroup = document.createElement('div');
  btnGroup.className = 'task-buttons';

  const editBtn = document.createElement('i');
  editBtn.className = 'fas fa-edit';
  editBtn.title = 'Edit';
  editBtn.onclick = function () {
    const updatedText = prompt('Edit your task:', span.innerText);
    if (updatedText !== null && updatedText.trim() !== '') {
      span.innerText = updatedText.trim();
      showToast('Task updated');
    }
  };

  const deleteBtn = document.createElement('i');
  deleteBtn.className = 'fas fa-trash';
  deleteBtn.title = 'Delete';
  deleteBtn.onclick = function () {
    li.remove();
    updateTaskCount();
    showToast('Task deleted');
  };

  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnGroup);
  return li;
}

function addTask() {
  const input = document.getElementById('input-item');
  const taskText = input.value.trim();
  if (taskText === '') {
    showToast('Please enter a task!');
    return;
  }
  const taskList = document.getElementById('task-list');
  const taskItem = createTaskElement(taskText);
  taskList.appendChild(taskItem);

  input.value = '';
  updateTaskCount();
  showToast('Task added');
}

// Allow pressing Enter to add
document.getElementById('input-item').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addTask();
});
document.getElementById('add-btn').addEventListener('click', addTask);

function updateTaskCount() {
  const total = document.querySelectorAll('#task-list li').length;
  const countSpan = document.getElementById('task-count');
  countSpan.innerText = `${total} ${total === 1 ? 'task' : 'tasks'}`;
}

function clearCompleted() {
  const completedTasks = document.querySelectorAll('#task-list li.completed');
  completedTasks.forEach(task => task.remove());
  updateTaskCount();
  showToast('Completed tasks cleared');
}

// --- Filters and active highlight ---
const filterButtons = document.querySelectorAll('.filters button');
function filterTasks(type) {
  const tasks = document.querySelectorAll('#task-list li');
  tasks.forEach(task => {
    if (type === 'all') {
      task.style.display = 'flex';
    } else if (type === 'active') {
      task.style.display = task.classList.contains('completed') ? 'none' : 'flex';
    } else if (type === 'completed') {
      task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
    }
  });
  filterButtons.forEach(btn => btn.classList.remove('active'));
  // Highlight current filter button
  const btnIndex = type === 'all' ? 0 : type === 'active' ? 1 : 2;
  filterButtons[btnIndex].classList.add('active');
}

// --- Dark mode toggle ---

const darkModeBtn = document.getElementById('dark-mode-toggle');
const body = document.body;
// Set initial mode if saved in localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.setAttribute('data-theme', 'dark');
  updateDarkModeIcon();
}

darkModeBtn.onclick = function() {
  if(body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
  updateDarkModeIcon();
};

function updateDarkModeIcon(){
  darkModeBtn.innerHTML = body.getAttribute('data-theme') === 'dark'
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
}

// --- Initial count & filter ---
updateTaskCount();
filterTasks('all');
