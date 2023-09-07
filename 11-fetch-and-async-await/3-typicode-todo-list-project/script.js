const apiUrl = 'https://jsonplaceholder.typicode.com/todos';



function updateTodo(id, completed) {
  
  fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({completed}),
    headers: {
      'Content-Type': 'application/json'
    }
  });

}



function deleteTodo(id) {
  
  fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    
    .then(res => res.json())
    
    .then(data => document.querySelector(`#todo-list > div[data-id="${id}"]`).remove());

}



function addTodoToDOM(todo) {

  const div = document.createElement('div');

  div.appendChild(document.createTextNode(todo.title));

  div.setAttribute('data-id', todo.id);

  if (todo.completed) {
    div.classList.add('done');
  }

  div.addEventListener('click', function() {
    this.classList.toggle('done');
    updateTodo(this.dataset.id, this.classList.contains('done'));
  });

  div.addEventListener('dblclick', function() {
    const id = this.dataset.id;
    deleteTodo(id);
  })
  
  document.getElementById('todo-list').appendChild(div);

}



function getTodos() {

  fetch(apiUrl + '?_limit=10')

    .then(res => res.json())

    .then(data => {

      for (const todo of data) {
        addTodoToDOM(todo);
      }

    });

}



function createTodo(e) {
  e.preventDefault();

  const newTodo = {
    title: this.firstElementChild.value,
    completed: false,
  };

  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json'
    }
  })

    .then(res => res.json())

    .then(data => addTodoToDOM(data))
}



function init() {

  document.addEventListener('DOMContentLoaded', getTodos);

  document.querySelector('#todo-form').addEventListener('submit', createTodo);

}



init();