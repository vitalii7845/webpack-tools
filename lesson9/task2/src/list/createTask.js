import { renderTasks } from './renderer.js';
import { getTasksList, creatTask } from './tasksGateway.js';

function onCreateTask() {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;

  if (!text) return;

  // const tasksList = getItem('tasksList') || [];

  const newTask = {
    id: Math.random() * 100 + 1,
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  creatTask(newTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      renderTasks(newTasksList);
    });
  console.log(newTask);
  taskTitleInputElem.value = '';
}

export { onCreateTask };
