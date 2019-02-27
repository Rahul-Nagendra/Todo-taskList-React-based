import React from 'react'
import TodoItem from './TodoItem'
class Todos extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div>
                <h1> Todo List</h1>
                {this.props.todos.map(todo => {
                    return (
                        <TodoItem key={todo.id} todo={todo} toggleComplete={this.props.toggleComplete} />
                    )
                })}
            </div>
        )
    }
}

export default Todos