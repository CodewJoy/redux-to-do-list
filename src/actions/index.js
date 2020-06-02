/*
 * action type
 */
export const CHANGE_TODO_TEXT = 'CHANGE_TODO_TEXT'
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const SET_VIEW_FILTER= 'SET_VIEW_FILTER'

export const ViewFilters = {
    SHOW_ALL: 'all',
    SHOW_COMPLETED: 'isCompleted',
    SHOW_ACTIVE: 'active'
}

/*
 * action creator
 */

export function changeTodoText(text) {
  return { type: CHANGE_TODO_TEXT, text }
}

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id }
}

export function deleteTodo(id) {
  return { type: DELETE_TODO, id }
}

export function setViewFilter(filter) {
  return { type: SET_VIEW_FILTER, filter }
}