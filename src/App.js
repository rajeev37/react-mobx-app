import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
// import './App.css';
import Birds from "./components/BirdsComponent/Birds";
import TodoList from "./components/TodoListComponent/TodoList";

@inject("TodoStore")
@observer
class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const bird = this.bird.value;
    this.props.BirdStore.addBird(bird);
    this.bird.value = "";
  }
  render() {
    const {TodoStore} = this.props;
    return (
      <div className="App">
        <Birds></Birds>
        
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
