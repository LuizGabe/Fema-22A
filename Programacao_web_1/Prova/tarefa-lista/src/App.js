/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
    <div className="page" id="todo-list">
      <h1 className="lista-tarefa">Lista de Tarefas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button className="tarefa" type="submit">Adicionar Tarefa</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <div className="todo-text">
            <input
              type="checkbox"
              id="completed"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            {todo.id === todoEditing ? (
              <input className="bara"
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div className="texto">{todo.text}</div>
            )}
          </div>
          <div className="todo-actions">
            {todo.id === todoEditing ? (
              <button className="enviar" onClick={() => submitEdits(todo.id)}>Enviar edição</button>
            ) : (
              <button className="editar" onClick={() => setTodoEditing(todo.id)}>Editar</button>
            )}

            <button className="excluir" onClick={() => deleteTodo(todo.id)}>Excluir</button>
          </div>
        </div>
      ))}
      <footer>
        <h1>   Carlos, Gabrieli,Matheus, Luana, Luiz </h1>
        <img src={require('./femalogo.png')} />
      </footer>
     
    </div>

  );
};

export default App;