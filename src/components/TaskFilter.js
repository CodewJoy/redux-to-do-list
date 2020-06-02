import React from "react";
import { setViewFilter, ViewFilters } from '../actions';
import store from '../store';
const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = ViewFilters

// Stateless Component)
const TaskFilter = () => {
    return (
        <div>
            <button onClick={() => { store.dispatch(setViewFilter(SHOW_ALL)) }}>All</button>
            <button onClick={() => { store.dispatch(setViewFilter(SHOW_ACTIVE)) }}>Active</button>
            <button onClick={() => { store.dispatch(setViewFilter(SHOW_COMPLETED)) }}>Completed</button>
        </div>
    )
}

export default TaskFilter;