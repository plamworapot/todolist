// REDUCERS
import * as actionTypes from './../constants/ActionTypes'

export default (state = {}, action) => {
  switch (action.type) {
  case actionTypes.TEXT_CHANGE:
    return Object.assign({}, state, { currentText: action.text })
  case actionTypes.DESC_CHANGE:
    return Object.assign({}, state, { currentDesc: action.text })
  case actionTypes.CLEAR_INPUT:
    return Object.assign({}, state, { currentDesc: '', currentText: '' })
  case actionTypes.ADD_TODO:
    return Object.assign({}, state, {
      todos: [ ...state.todos, {
        id: Date.now() + Math.ceil(Math.random(100) * 100),
        text: action.text,
        desc: action.desc,
        complete: false
      }],
      currentDesc: '',
      currentText: ''
    })
  case actionTypes.COMPLETE_TOGGLE:
    return Object.assign({}, state, {
      todos: state.todos.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        } else {
          return todo
        }
      }),
      currentDesc: '',
      currentText: ''
    })
  case actionTypes.DELETE_TODO:
    return Object.assign({}, state, {
      todos: state.todos.filter((todo) => {
        return todo.id !== action.id
      }),
      currentDesc: '',
      currentText: ''
    })
  case actionTypes.FILTER_TODO:
    return Object.assign({}, state, { filter: action.filter })
  case actionTypes.LOAD_PREV_STORE:
    return Object.assign({}, state, action.prevState)
  default: return state
  }
}
