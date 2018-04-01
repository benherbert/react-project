import { createStore } from 'redux';

// Need a reducer
const reducer = function(state, action) {
	return 'foo';
}

// Need a store
// Create store and pass in an initial state
// Would normally be an object that has all values of application state
const store = createStore(reducer, 0);

// Subscribe to the store
// When anything changes, console.log and get state
store.subscribe(() => {
	console.log('Store has changed', store.getState());
})

store.dispatch({type: 'INC', payload: 1})