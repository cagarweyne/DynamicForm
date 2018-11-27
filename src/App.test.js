import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//
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

