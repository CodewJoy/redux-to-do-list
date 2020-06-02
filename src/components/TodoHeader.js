import React, { Component } from "react";
import store from '../store';
import { changeTodoText, addTodo } from "../actions";

class TodoHeader extends Component {
    handleChange = (event) => {
        let todoText = event.target.value;
        store.dispatch(changeTodoText(todoText))
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let todoText = store.getState().todoText;
        let todoItem = {
            isCompleted: false,
            id: String(Date.now()),
            content: todoText
        }
        if (todoText.length === 0) {
            return
        }
        store.dispatch(addTodo(todoItem));
        store.dispatch(changeTodoText(""));
    }
    render() {
        const { todoText } = this.props;
        return (
            <>
                <h1> todolist </h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={todoText}
                        onChange={this.handleChange}
                        placeholder="Key in your tasks..."
                    />
                </form>
                <hr />
            </>
        )
    }
}

export default TodoHeader;