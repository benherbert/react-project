import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'

// Example reducer
const listManager = (state = {}, action) => {
  return {

  }
}

// This is the store we create with Redux's createStore method
const store = createStore(listManager)

// Provider is given the store as a prop
ReactDOM.render (
    <Provider store={store}>
    	<App />
    </Provider>,
    document.getElementById('root')
)