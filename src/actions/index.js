import * as types from '../constants/ActionTypes'

export const addTodo = (text, desc) => ({ type: types.ADD_TODO, text, desc })
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
// export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
export const todoCompleteToggle = id => ({ type: types.COMPLETE_TOGGLE, id })
// export const completeAll = () => ({ type: types.COMPLETE_ALL })
// export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })

export const changeCurrentText = (text) => ({ type: types.TEXT_CHANGE, text })
export const changeCurrentDesc = (text) => ({ type: types.DESC_CHANGE, text })
export const clearInput = () => ({ type: types.CLEAR_INPUT })

export const filterTodo = (filter) => ({ type: types.FILTER_TODO, filter })
export const filterTodoClear = () => ({ type: types.FILTER_TODO, filter: types.FILTER_ALL })

export const loadPrevStore = (prevState) => ({ type: types.LOAD_PREV_STORE, prevState })
