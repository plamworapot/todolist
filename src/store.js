import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers'

export const initStore = (initialState = {},isServer = true) => {
    return createStore(reducer,
      initialState,
      composeWithDevTools(
        applyMiddleware(thunkMiddleware)
      )
    )
}
