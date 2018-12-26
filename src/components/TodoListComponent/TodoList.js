import React, { Component } from 'react';
import { inject, observer } from "mobx-react";

@inject("TodoStore")
@observer
class TodoList extends Component {
    createNew(e) {
        if(e.which === 13) {
            this.props.TodoStore.createTodo(e.target.value)
            e.target.value = ""
        }
    }
    filter(e) {
        this.props.TodoStore.filter = e.target.value
    }

    toggleComplete(todo) {
        todo.complete = !todo.complete
    }
  render() {
    const { filter, filteredTodos, clearComplete } = this.props.TodoStore;
    const todoList = filteredTodos.map(todo => (
        <li key={todo.id}>
            <input
                type="checkbox"
                value={todo.complete}
                checked={todo.complete}
                onChange={this.toggleComplete.bind(this, todo)}
            />
            {todo.value}
        </li>
    ))
    return (
        <div className="Todo">
            <h3>Todos</h3>
            <input className="create" placeholder="Create Todo" onKeyPress={this.createNew.bind(this)} /><br/>
            <input className="filter" placeholder="Filter Todo" value={filter} onChange={this.filter.bind(this)} />
            <ul>{todoList}</ul>
            <a href="#" onClick={this.props.TodoStore.clearComplete}>Clear Complete</a>
        </div>
    );
  }
}

export default TodoList;
