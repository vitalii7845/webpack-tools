import { getTasksList } from './tasksGateway.js';

const listElem = document.querySelector('.list');

function createCheckbox({ done, id }) {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.setAttribute('data-id', id);
  checkboxElem.checked = done;
  checkboxElem.classList.add('list-item__checkbox');

  return checkboxElem;
}

function createListItem({ text, done, id }) {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list-item', 'list__item');

  if (done) {
    listItemElem.classList.add('list-item_done');
  }

  const textElem = document.createElement('span');
  textElem.classList.add('list-item__text');
  textElem.textContent = text;

  const checkboxElem = createCheckbox({ done, id });

  const deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list-item__delete-btn');

  listItemElem.append(checkboxElem, textElem, deleteBtnElem);

  return listItemElem;
}

const compareTasks = (a, b) => {
  if (a.done - b.done !== 0) {
    return a.done - b.done;
  }
  if (a.done) {
    return new Date(b.finishDate) - new Date(a.finishDate);
  }
  return new Date(b.createDate) - new Date(a.createDate);
};

function renderTasks() {
  return getTasksList().then(tasksList => {
    console.log(tasksList);
    listElem.innerHTML = '';
    const tasksElems = tasksList.sort(compareTasks).map(createListItem);

    listElem.append(...tasksElems);
  });
}

export { renderTasks };
