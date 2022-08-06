const baseUrl = 'https://62e598aa20afdf238d7e1f39.mockapi.io/API/v1/tasks';

const mapTasks = tasks => tasks.map(({ id, ...rest }) => ({ ...rest, id }));

const getTasksList = () => {
  return fetch(baseUrl)
    .then(response => response.json())
    .then(tasks => mapTasks(tasks));
};

const getTaskById = taskId => {
  return fetch(`${baseUrl}/${taskId}`).then(response => response.json());
};

const creatTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
};

const updateTask = (taskId, updateTaskData) => {
  console.log(`${baseUrl}/${taskId}`);
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updateTaskData),
  });
};

const deleteTask = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
};

export { getTasksList, getTaskById, creatTask, updateTask, deleteTask };
