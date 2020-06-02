import React, { Component } from "react";
import { setViewFilter, ViewFilters } from '../actions';
import store from '../store';
const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = ViewFilters

class TaskFilter extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }
    changeToAll = () => {
        store.dispatch(setViewFilter(SHOW_ALL))
    }

    changeToActive = () => {
        store.dispatch(setViewFilter(SHOW_ACTIVE))
    }

    changeToCompleted = () => {
        store.dispatch(setViewFilter(SHOW_COMPLETED))
    }

    render() {
        return (
            <div>
                <button onClick={ this.changeToAll }>All</button>
                <button onClick={ this.changeToActive }>Active</button>
                <button onClick={ this.changeToCompleted }>Completed</button>
            </div>
        )
    }
}

export default TaskFilter;