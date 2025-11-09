import "./App.css";
import { Component } from "react";
import { TodosEditor } from "./components/TodosEditor/TodosEditor";
import { TodosList } from "./components/TodosList/TodosList";
import { Filter } from "./components/Filter/Filter";

class App extends Component {
  state = {
    todos: [
      { id: "id-1", text: "Вивчити основи React", completed: true },
      { id: "id-2", text: "Розібратися з React Router", completed: false },
      { id: "id-3", text: "Пережити Redux", completed: false },
    ],
    filter: "",
  };

  addTodo = ({ text }) => {
    const newTodo = {
      id: `id-${Date.now()}`,
      text: text,
    };

    const textExists = this.state.todos.some(
      (todo) => todo.text.toLowerCase() === text.toLowerCase()
    );
    if (textExists) {
      alert(`${text} is already in contacts.`);
      return;
    }

    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  };

  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredTodos = () => {
    const { todos, filter } = this.state;
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const getFilteredTodos = this.getFilteredTodos();

    return (
      <div className="App">
        <h1 className="title">Todo application</h1>
        <TodosEditor onSubmit={this.addTodo} />
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <TodosList todos={getFilteredTodos} onDelete={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
