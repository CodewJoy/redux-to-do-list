import React, { Component } from "react";
import TodoHeader from "./components/TodoHeader.js";
import List from "./components/List.js";
import TaskFilter from "./components/TaskFilter.js";
import store from './store';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
    }
    componentDidMount() {
        store.subscribe(this.handleStoreChange);
    }
    handleStoreChange = () => {
        let newState = store.getState();
        this.setState(newState);
    }
    render() {
        const { todoText, todos, status } = this.state;
        return (
            <div className="main">
                <TodoHeader 
                    todoText={todoText}
                />
                <List
                    todos={todos}
                    status={status}
                />
                <TaskFilter
                />
            </div>
        )
    }
}

export default App;