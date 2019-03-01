import React from 'react';

class AddTodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} style={formStyle}>
                <input type="text" name="title" placeholder="Add Todo task.." onChange={this.handleInputChange} value={this.state.title} />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

const formStyle = {
    padding: '10px 0px'
}

export default AddTodoItem