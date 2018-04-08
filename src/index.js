import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import FormField from './components/2-molecules/form-field/FormField'

ReactDOM.render (
	<Provider>
    	<FormField labelFor='firstname' labelValue='First name' name='firstname' />
    </Provider>,
    document.getElementById('root')
)