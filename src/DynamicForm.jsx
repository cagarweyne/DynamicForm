import React, { Component, Fragment } from 'react';
import { Formik, Field } from 'formik';
import './App.css';

class DynamicForm extends Component {
  renderCheckBox(input) {
    return (
      <Fragment key={input.name}>
        <label>{input.label}</label>
        <Field
          name={input.name}
          render={(prop) => {
            const { field } = prop;
            return (
              <input
                name={input.name}
                type="checkbox"
                checked={field.value}
                onChange={field.onChange} />
            );
          }}
        />
      </Fragment>

    );
  }

  renderTextArea(input) {
    return (
      <Fragment key={input.name}>
        <label>{input.label}</label>
        <div>
          <Field
            name={input.name}
            render={(props) => {
              const { field } = props;
              const { errors, touched } = props.form;
              const hasError = errors[input.name] && touched[input.name] ? 'hasError' : '';
              return (
                <div>
                  <textarea {...field} id={hasError}>
                  </textarea>
                </div>
              );
            }}
          />
        </div>
      </Fragment>
    );
  }

  renderSelect(input) {
    return (
      <Fragment key={input.name}>
        <label>{input.label}</label>
        <div>
          <Field
            name={input.name}
            render={(props) => {
              const { field } = props;
              const { errors, touched } = props.form;
              const hasError = errors[input.name] && touched[input.name] ? 'hasError' : '';
              const defaultOption = <option key='default' value='Please Select'>Please Select</option>;
              const options = input.data.map(i => <option key={i} value={i}> {i} </option> );
              const selectOptions = [defaultOption, ...options];
              return (
                <div className='dropdown'>
                  <select value={field.value} {...field} id={hasError}>
                    {
                      selectOptions
                    }
                  </select>
                </div>
              );
            }}
          />
        </div>
      </Fragment>
    );
  }

  renderFields(inputs) {
    return inputs.map(input => {
      if(input.type === 'select') {
        return this.renderSelect(input);
      }

      if(input.type === 'checkbox') {
        return this.renderCheckBox(input);
      }

      if(input.type === 'textarea') {
        return this.renderTextArea(input);
      }
      return (
        <div key={input.name}>
          <label>{input.label}</label>
          <div>
            <Field
              name={input.name}
              render={(props) => {
                const { field } = props;
                const { errors, touched } = props.form;
                const hasError = errors[input.name] && touched[input.name] ? 'hasError' : '';
                return (
                  <input
                    {...field}
                    id={hasError}
                    type='text'
                  />
                );
              }}
            />
          </div>
        </div>
      );
    })
  }

  getInitialValues(inputs) {
    //declare an empty initialValues object
    const initialValues = {};
    //loop loop over fields array
    //if prop does not exit in the initialValues object,
    // pluck off the name and value props and add it to the initialValues object;
    inputs.forEach(field => {
      if(!initialValues[field.name]) {
        initialValues[field.name] = field.value;
      }
    });

    //return initialValues object
    return initialValues;
  }

  render() {
    const initialValues = this.getInitialValues(this.props.fields);
    return (
      <div className="app">
        <h1>Dynamic Form</h1>
        <Formik
          onSubmit={(values) => {console.log(values)}}
          validationSchema={this.props.validation}
          initialValues={initialValues}
          render={(form) => {
            const errorMessageShow = Object.keys(form.errors).length > 0 ? 'error' : 'hidden';
            return <div>
              <form onSubmit={form.handleSubmit}>
                <div className={errorMessageShow}>
                  Please correct the errors below
                </div>
                {this.renderFields(this.props.fields)}
                <button type='submit' className='btn'>Submit</button>
              </form>
            </div>
          }}
        />
      </div>
    );
  }
}


export default DynamicForm;
