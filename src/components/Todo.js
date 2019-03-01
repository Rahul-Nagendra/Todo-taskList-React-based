import React from 'react'
import TodoItem from './TodoItem'
class Todos extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div>
                {this.props.todos.map(todo => {
                    return (
                        <TodoItem key={todo.id} todo={todo} toggleComplete={this.props.toggleComplete} deleteTodo={this.props.deleteTodo} />
                    )
                })}
            </div>
        )
    }
}

export default Todos