import * as types from '../constants/ActionTypes'
import Router from 'next/router'

export const addTodo = (text, desc) => (dispatch) => {
  dispatch({ type: types.ADD_TODO, text, desc })
  Router.push('/todolist')
}
export const editTodo = (text, desc, id) => (dispatch) => {
  dispatch({ type: types.EDIT_TODO, id, text, desc })
  Router.push('/todolist')
}
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
export const todoCompleteToggle = id => ({ type: types.COMPLETE_TOGGLE, id })
export const selected = id => ({ type: types.TODO_SELECTED, id })

export const checkedToggle = id => ({ type: types.CHECKED_TOGGLE, id })
export const completeSelected = () => ({ type: types.COMPLETE_SELECTED })
export const uncompleteSelected = () => ({ type: types.UNCOMPLETE_SELECTED })
export const removeSelected = () => ({ type: types.REMOVE_SELECTED })

export const changeCurrentText = (text) => ({ type: types.TEXT_CHANGE, text })
export const changeCurrentDesc = (text) => ({ type: types.DESC_CHANGE, text })
export const clearInput = () => ({ type: types.CLEAR_INPUT })

export const filterTodo = (filter) => ({ type: types.FILTER_TODO, filter })
export const filterTodoClear = () => ({ type: types.FILTER_TODO, filter: types.FILTER_ALL })

export const loadPrevStore = ({ todos, currentText, currentDesc, filter }) => {
  const prevTodos = todos.map(({ id, desc, text, complete }) => ({
    id,
    desc,
    text,
    complete,
    selected: false
  }))
  return ({ type: types.LOAD_PREV_STORE,
    prevState: {
      todos: prevTodos,
      currentText,
      currentDesc,
      filter
    }
  })
}
