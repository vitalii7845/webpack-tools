import { renderTasks } from './renderer.js';
import { getTasksList, creatTask, deleteTask } from './tasksGateway.js';

function onDeleteTask() {
  const isDeleteBtn = event.target.classList.contains('list-item__delete-btn');
  if (!isDeleteBtn) return;

  const nearestInputId = event.target.parentNode.firstElementChild.dataset.id;
  deleteTask(nearestInputId)
    .then(() => getTasksList())
    .then(() => {
      renderTasks();
    });
}

export { onDeleteTask };
