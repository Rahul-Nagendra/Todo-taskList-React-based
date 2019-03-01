import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import Header from './components/layout/header'
import Todos from './components/Todo'
import AddTodoItem from './components/AddTodoItem'
import uuid from 'uuid'
import Axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          id: uuid.v4(),
          title: 'Create Todo list App',
          completed: false
        },
        {
          id: uuid.v4(),
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
  deleteTodo = (id) => {
    // this.setState({
    //   todos: this.state.todos.filter(todo => {
    //     return todo.id != id
    //   })
    // })
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(response => {
      this.setState({
        todos: this.state.todos.filter(todo => {
          return todo.id != id
        })
      })
    })
  }

  addTodo = (title) => {
    console.log(title)
    let newTodo = {
      title: title,
      completed: false
    }
    Axios.post('https://jsonplaceholder.typicode.com/todos', newTodo).then(response => {
      this.setState({
        todos: [response.data, ...this.state.todos]
      })
    })
    // this.setState({
    //   todos: [newTodo, ...this.state.todos]
    // })
  }

  componentWillMount() {
    Axios.get(`https://jsonplaceholder.typicode.com/todos`).then(response => {
      this.setState({
        todos: response.data
      })
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <AddTodoItem addTodo={this.addTodo} />
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
