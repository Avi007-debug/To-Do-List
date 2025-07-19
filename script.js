// ----- Helper: Local Storage Keys -----
const STORAGE_KEY = 'smart-todo-list-v1';

// ----- Local Storage Functions -----
function getTodosFromStorage() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}
function saveTodosToStorage(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// ----- Todo Item Format -----
// { text: string, completed: boolean }
let todos = getTodosFromStorage();

// ----- DOM Elements -----
const input = document.getElementById('input-item');
const taskList = document.getElementById('task-list');
const countSpan = document.getElementById('task-count');
const filterButtons = document.querySelectorAll('.filters button');

// ----- Main Render Function -----
function renderTodos(filter = getCurrentFilter()) {
  taskList.innerHTML = '';
  let filtered = todos;
  if (filter === 'active') filtered = todos.filter(t => !t.completed);
  if (filter === 'completed') filtered = todos.filter(t => t.completed);

  filtered.forEach((todo, idx) => {
    const li = document.createElement('li');
    if (todo.completed) li.classList.add('completed');

    const span = document.createElement('span');
    span.className = 'task-text';
    span.innerText = todo.text;
    span.onclick = function () {
      toggleComplete(idx, filter);
    };

    const btnGroup = document.createElement('div');
    btnGroup.className = 'task-buttons';

    const editBtn = document.createElement('i');
    editBtn.className = 'fas fa-edit';
    editBtn.title = 'Edit';
    editBtn.onclick = function () {
      const updatedText = prompt('Edit your task:', todo.text);
      if (updatedText !== null && updatedText.trim() !== '') {
        editTask(idx, updatedText.trim(), filter);
      }
    };

    const deleteBtn = document.createElement('i');
    deleteBtn.className = 'fas fa-trash';
    deleteBtn.title = 'Delete';
    deleteBtn.onclick = function () {
      deleteTask(idx, filter);
    };

    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnGroup);
    taskList.appendChild(li);
  });
  updateTaskCount();
  highlightFilterButton(filter);
}

// ----- Filter State -----
function getCurrentFilter() {
  const btn = document.querySelector('.filters button.active');
  if (btn) {
    if (btn.textContent.trim() === 'All') return 'all';
    if (btn.textContent.trim() === 'Active') return 'active';
    if (btn.textContent.trim() === 'Completed') return 'completed';
  }
  return 'all';
}
function highlightFilterButton(filter) {
  filterButtons.forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.filters button[onclick*="${filter}"]`).classList.add('active');
}

// ----- Add, Edit, Delete, Complete, Clear, Persist -----
function addTask() {
  const taskText = input.value.trim();
  if (!taskText) {
    showToast('Please enter a task!');
    return;
  }
  todos.push({ text: taskText, completed: false });
  saveTodosToStorage(todos);
  input.value = '';
  renderTodos(getCurrentFilter());
  showToast('Task added');
}
function editTask(globalIndex, newText, filter) {
  // Find the index in the global todos array
  const mappedIndex = getMappedIndex(globalIndex, filter);
  if (mappedIndex !== -1) {
    todos[mappedIndex].text = newText;
    saveTodosToStorage(todos);
    renderTodos(filter);
    showToast('Task updated');
  }
}
function deleteTask(globalIndex, filter) {
  const mappedIndex = getMappedIndex(globalIndex, filter);
  if (mappedIndex !== -1) {
    todos.splice(mappedIndex, 1);
    saveTodosToStorage(todos);
    renderTodos(filter);
    showToast('Task deleted');
  }
}
function toggleComplete(globalIndex, filter) {
  const mappedIndex = getMappedIndex(globalIndex, filter);
  if (mappedIndex !== -1) {
    todos[mappedIndex].completed = !todos[mappedIndex].completed;
    saveTodosToStorage(todos);
    renderTodos(filter);
  }
}
function clearCompleted() {
  todos = todos.filter(t => !t.completed);
  saveTodosToStorage(todos);
  renderTodos(getCurrentFilter());
  showToast('Completed tasks cleared');
}
// Helper to map filtered index to global todos index
function getMappedIndex(idx, filter) {
  let filtered;
  if (filter === 'active') filtered = todos.filter(t => !t.completed);
  else if (filter === 'completed') filtered = todos.filter(t => t.completed);
  else filtered = todos;
  if (!filtered[idx]) return -1;
  // Find the index of this task in global todos
  const task = filtered[idx];
  return todos.findIndex(t => t.text === task.text && t.completed === task.completed);
}

// ----- Input Event (Enter) -----
input.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addTask();
});
document.getElementById('add-btn').addEventListener('click', addTask);

// ----- Filter Buttons -----
function filterTasks(type) {
  renderTodos(type);
}
window.filterTasks = filterTasks;

// ----- Task Counter -----
function updateTaskCount() {
  const total = todos.length;
  countSpan.innerText = `${total} ${total === 1 ? 'task' : 'tasks'}`;
}

// ----- Toast -----
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.innerText = message;
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 2000);
}

// ----- Dark Mode Persistence (Unchanged) -----
const darkModeBtn = document.getElementById('dark-mode-toggle');
const body = document.body;
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

// ----- On Load -----
document.addEventListener('DOMContentLoaded', function() {
  renderTodos('all');
});
