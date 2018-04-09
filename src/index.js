import React from 'react'
import ReactDOM from 'react-dom'
<<<<<<< HEAD
import { Provider } from 'react-redux'

import FormField from './components/2-molecules/form-field/FormField'

ReactDOM.render (
	<Provider>
    	<FormField labelFor='firstname' labelValue='First name' name='firstname' />
    </Provider>,
=======
import App from './components/App'

ReactDOM.render (
    <App />,
>>>>>>> master
    document.getElementById('root')
)