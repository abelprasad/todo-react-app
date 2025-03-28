import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
      <h1>📝 To-Do App</h1>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ width: '70%', padding: '0.5rem' }}
      />
      <button onClick={addTask} style={{ padding: '0.5rem', marginLeft: '0.5rem' }}>
        Add
      </button>
      <ul style={{ marginTop: '2rem' }}>
        {todos.map((t, index) => (
          <li key={index} style={{ marginBottom: '0.5rem' }}>
            {t}
            <button onClick={() => deleteTask(index)} style={{ marginLeft: '1rem' }}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
