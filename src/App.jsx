import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = e.target.elements[0];

    setTodos([
      ...todos,
      { id: Date.now(), text: todo.value, completed: false },
    ]);

    todo.value = '';
  };

  const handleToggle = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos &&
          todos.map((todo, i) => (
            <li
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
              key={i}
            >
              <span onClick={() => handleToggle(todo.id)}>{todo.text}</span>
              <button
                type="button"
                style={{ marginLeft: '1rem' }}
                onClick={() => handleDelete(todo.id)}
              >
                X
              </button>
            </li>
          ))}
      </ul>
    </main>
  );
}

export default App;
