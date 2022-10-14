import React, { useState } from 'react';

// Task 1: Avoid empty todo
// Task 2: Clear input on add todo
// Task 3: create `addTodo` function outside button onClick

function App() {
  const [todoList, setTodoList] = useState(['Somto']);
  const [todoInput, setTodoInput] = useState('');

  function addTodo() {
    if (todoInput.trim() === '') {
      return;
    }

    const tempTodoList = [...todoList];
    tempTodoList.push(todoInput);
    setTodoList(tempTodoList);
    setTodoInput('');
  }

  const inputValue = (e) => {
    setTodoInput(e.target.value);
  };

  return (
    <div className="App">
      <input onChange={inputValue} type="text" value={todoInput} />
      <button onClick={addTodo}>ADD</button>
      <ul>
        {todoList.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
