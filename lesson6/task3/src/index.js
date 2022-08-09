// import 'core-js';
import { initTodoListHandlers } from './list/todoList.js';
import { renderTasks } from './list/renderer.js';
import { getTasksList } from './list/tasksGateway.js';
// import { setItem } from './list/storage.js';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then(tasksList => {
    renderTasks(tasksList);
  });
  initTodoListHandlers();
});

function onStorageChange(event) {
  if (event.key === 'tasksList') renderTasks();
}

window.addEventListener('storage', onStorageChange);
