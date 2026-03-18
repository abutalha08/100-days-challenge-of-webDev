const todoList = document.getElementById("todo-list");

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(data => {
    data.slice(0, 5).forEach(todo => {
      const li = document.createElement("li");

      li.innerText = todo.title;

      todoList.appendChild(li);
    });
  });


  if (todo.completed) {
  li.innerText = "✅ " + todo.title;
} else {
  li.innerText = "❌ " + todo.title;
}