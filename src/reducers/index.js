import { combineReducers } from 'redux'
import { CHANGE_TODO_TEXT, ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_VIEW_FILTER, ViewFilters } from '../actions'
const { SHOW_ALL } = ViewFilters

function status(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VIEW_FILTER:
      return action.filter
    default:
      return state
  }
}

function todoText(state = "", action) {
  switch (action.type) {
    case CHANGE_TODO_TEXT:
      return action.text
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      let addState = state.concat(action.text);
      return addState
    case DELETE_TODO:
      let deleteState = JSON.parse(JSON.stringify(state));
      for (let i = 0; i < deleteState.length; i++) {
        if (deleteState[i].id === action.id) {
          deleteState.splice(i, 1);
        }
      }
      return deleteState
    case TOGGLE_TODO:
      let toggleState = JSON.parse(JSON.stringify(state));
      for (let i = 0; i < toggleState.length; i++) {
        if (toggleState[i].id === action.id) {
          toggleState[i].isCompleted = !state[i].isCompleted;
        }
      }
      return toggleState
    default:
      return state
  }
}

const todoApp = combineReducers({
  status,
  todoText,
  todos
})

export default todoApp