import { renderTasks } from './renderer.js';
import { updateTask, getTaskById } from './tasksGateway.js';

function onToggleTask(event) {
  const isCheckbox = event.target.classList.contains('list-item__checkbox');
  if (!isCheckbox) return;
  const taskId = event.target.dataset.id;
  getTaskById(taskId).then(task => {
    console.log(task);
    const { id, finishDate, done } = task;
    task.done = event.target.checked;
    task[finishDate] = done ? new Date().toISOString() : null;
    updateTask(id, task).then(() => {
      renderTasks();
    });
  });
}

export { onToggleTask };
