import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import Todos from './components/Todo'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Create Todo list App',
          completed: false
        },
        {
          id: 2,
          title: 'Upload to Github',
          completed: false
        }
      ]
    }
  }
  toggleComplete = (id) => {
    // console.log('btn clicked')
    console.log(id)
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id == id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })


  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} />
      </div>
    );
  }
}

export default App;
