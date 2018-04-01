import React from 'react'
import ReactDOM from 'react-dom'

import FormField from './components/2-molecules/form-field/FormField'

ReactDOM.render (
    <FormField labelFor='firstname' labelValue='First name' name='firstname' />,
    document.getElementById('root')
)