import React from 'react'
class TodoItem extends React.Component {
    setStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            border: '1px dotted ',

            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        return (
            <div style={this.setStyle()}>
                <input type='checkbox' onChange={() => { this.props.toggleComplete(this.props.todo.id) }} />
                {this.props.todo.title}
                <button style={btnStyle} onClick={() => { this.props.deleteTodo(this.props.todo.id) }}> X </button>
            </div>
        )
    }
}

const btnStyle = {
    float: 'right',
    backgroundColor: 'red'
}
export default TodoItem