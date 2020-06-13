import React, { Component } from "react";
import styled from 'styled-components';
import store from '../store';
import { deleteTodo, toggleTodo } from "../actions";

const Label = styled.label`
    display: flex;
    flex-direction: row;
    padding: 10px 0;
    align-items: center;
    justify-content: space-between;
    width: 500px;
`;
const Div = styled.div`
    max-width: 450px;
`;

class List extends Component {
    handleClick = (event) => {
        let id = event.target.id;
        store.dispatch(toggleTodo(id))

    }
    clicktoClose = (event) => {
        let id = event.target.id;
        store.dispatch(deleteTodo(id))
    }
    render() {
        const { todos, status } = this.props;
        let newTodo = []
        if (status === 'isCompleted') {
            for (let i = 0; i < todos.length; i++) {
                if (todos[i].isCompleted === true) {
                    newTodo.push(todos[i])
                }
            }
        } else if (status === 'active') {
            for (let i = 0; i < todos.length; i++) {
                if (todos[i].isCompleted === false) {
                    newTodo.push(todos[i])
                }
            }
        } else {
            newTodo = todos
        }
        return (
            <div>
                {newTodo.map(newTodo => (
                    <Label key={newTodo.id}>
                        <input
                            type="checkbox"
                            checked={newTodo.isCompleted}
                            id={newTodo.id}
                            onChange={this.handleClick}
                        />
                        <Div>{newTodo.content}</Div>
                        <button onClick={this.clicktoClose} id={newTodo.id}>
                            Delete
                        </button>
                    </Label>
                ))}
            </div>
        );
    }
}

export default List;