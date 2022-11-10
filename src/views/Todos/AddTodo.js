import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {

    state = {
        title: ''
    }
    handleOnchange = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleOnClickTodo = () => {
        if (!this.state.title) {
            toast.error('Missing tilte')
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 11),
            title: this.state.title
        }
        this.props.addNewTodo(todo)

        this.setState({
            title: ''
        })
    }

    render() {
        let { title } = this.state
        return (
            <div className="add-todo">
                <input type="text" value={this.state.title}
                    onChange={(event) => this.handleOnchange(event)} />
                <button type="button" className="Add"
                    onClick={() => this.handleOnClickTodo()}>Add</button>
            </div>
        )
    }
}

export default AddTodo;