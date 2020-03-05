import React from 'react';
import TodoList from './Todo/TodoList';
import AddTodo from './Todo/AddTodo';
import Context from './context';
import classes from './App.module.css'

export default function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: true, title: 'learn JS'},
    {id: 2, completed: true, title: 'learn CSS and HTML'},
    {id: 3, completed: true, title: 'learn React'},
    {id: 4, completed: true, title: 'add some projects to GitHub'},
    {id: 5, completed: false, title: 'get offer'}
  ])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    )
  };

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  };

  function addTodo(title) {
    setTodos(todos.concat([{
      title: title,
      id: Date.now(),
      completed: false,
    }]))
  };
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className={classes.wrapper}>
        <h1>Todo list</h1>
        <AddTodo onCreate={addTodo}/>
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p>No todos</p>}
      </div>
    </Context.Provider>
  );
};
