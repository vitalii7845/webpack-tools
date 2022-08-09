const baseUrl = 'https://62e6b6620e5d74566aeb7770.mockapi.io/API/v1/tasks';

const mapTasks = tasks => tasks.map(({ id, ...rest }) => ({ ...rest, id }));

export const getTasksList = () => {
  return fetch(baseUrl)
    .then(response => response.json())
    .then(tasks => mapTasks(tasks));
};

export const getTaskById = taskId => {
  return fetch(`${baseUrl}/${taskId}`).then(response => response.json());
};

export const creatTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
};

export const updateTask = (taskId, updateTaskData) => {
  console.log(`${baseUrl}/${taskId}`);
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updateTaskData),
  });
};

export const deleteTask = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
};
