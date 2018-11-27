import React, { Component } from 'react';
import validation from './validation';
import DynamicForm from './DynamicForm';

class App extends Component {
  render() {
    const fields = [
      {label: 'First Name', type: 'input', name: 'firstName', value: 'Abdi'},
      {label: 'Last Name', type: 'input', name: 'lastName', value: 'Ahmed'},
      {label: 'City', type: 'input', name: 'city', value: 'London'},
      {label: 'Address', type: 'input', name: 'address', value: '10 FSS Street'},
      {label: 'Occupation', type: 'select', data: ['Teacher', 'Software Engineer', 'Doctor', 'Lawyer'], name: 'occupation', value: 'Please Select'},
      {label: 'Message', type: 'textarea', name: 'message', value: ''},
      {label: 'Agree to Terms & Conditions', type: 'checkbox', name: 'terms', value: false},
    ];
    return (
      <DynamicForm fields={fields} validation={validation} />
    );
  }
}

export default App;
