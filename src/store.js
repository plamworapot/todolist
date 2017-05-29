import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers'
import * as actionTypes from './constants/ActionTypes'

let defaultStore = {
  currentText: '',
  currentDesc: '',
  todos: [],
  filter: actionTypes.FILTER_ALL
}

export const initStore = (initialState = defaultStore) => {
  const store = createStore(reducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunkMiddleware)
    )
  )

  store.subscribe(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('todoState', JSON.stringify(store.getState()))
    }
  })
  return store
}
