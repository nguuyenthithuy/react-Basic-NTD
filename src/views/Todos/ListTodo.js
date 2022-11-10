import React from "react";
import './Listtodo.scss'
import './AddTodo';
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';
class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: 'Todo1', title: 'Doing homework' },
            { id: 'Todo2', title: 'Marking vidio' },
            { id: 'Todo3', title: 'Fixing pugs' },
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Wow so easy!");
    }

    handleDeleteTodos = (todo) => {
        let currentTodos = this.state.listTodos
        currentTodos = currentTodos.filter(item => item.id != todo.id)
        this.setState({
            listTodos: currentTodos
        })
        toast.success("Delete ok!");
    }
    handleEditTodos = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //save 
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));
            listTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success('Update succed')
            return;
        }
        this.setState({
            editTodo: todo
        })
    }
    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { listTodos, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        // let listTodo=this.state.listTodos
        return (
            <>
                <p>
                    Simple TODO Apps with React.js ( Nguyễn Thị Thủy)
                </p>
                <div className="list-todo-container">
                    <AddTodo
                        addNewTodo={this.addNewTodo}
                    />
                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>

                                        {isEmptyObj === true ?
                                            <span> {index + 1} - {item.title} </span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1}-<input value={editTodo.title}
                                                            onChange={(event) => this.handleOnchangeEditTodo(event)}
                                                        />
                                                    </span>
                                                    :
                                                    <span> {index + 1} - {item.title} </span>
                                                }
                                            </>

                                        }

                                        <button className="Edit"

                                            onClick={() => this.handleEditTodos(item)}>
                                            {isEmptyObj === false && editTodo.id === item.id
                                                ? 'Save' : 'Edit'}

                                        </button>
                                        <button className="Delete"

                                            onClick={() => this.handleDeleteTodos(item)}> Delete </button>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </>

        )
    }
}

// export default ListTodo
export default ListTodo