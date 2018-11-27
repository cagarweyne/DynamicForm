# Dynamic Form 

This is a dynamic React form component built with Formik. To run this project, simply                       clone this repository and run either:
```yarn install```
or: 

```npm install```

Depending on the which package manager you are using. The Component takes two props: 

1. fields 
2. validation

## fields 

the fields props is an array of objects in the following format: 

```javascript
    const fields = [
      {label: 'Company Name', type: 'input', name: 'companyName', value: 'FSS'},
      {label: 'Company Name 2', type: 'input', name: 'companyname2', value: 'Cloudwire'},
      {label: 'Address Line 1', type: 'input', name: 'addressLine1', value: '1 Gresham Road'},
      {label: 'County', type: 'select', data: ['option 1', 'option 2'], name: 'county', value: 'Please Select'},
      {label: 'Town', type: 'input', name: 'town', value: 'London'},
      {label: 'Country', type: 'input', name: 'country', value: 'UK'},
      {label: 'Message', type: 'textarea', name: 'message', value: ''},
      {label: 'Agree', type: 'checkbox', name: 'agree', value: false},
    ];
```
## validation 

The validation prop uses yup and it should be in this format: 

```javascript
export const alpha = /^[a-zA-Z_]+( [a-zA-Z_]+)*$/;
export const alphaNum = /^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$/;
const validation = Yup.object().shape({
  companyName: Yup.string()
    .matches(alphaNum, {message: "Enter Valid Name", excludeEmptyString: true })
    .required()
    .max(35),
  companyName2: Yup.string()
    .matches(alphaNum, {message: "Enter Valid Name", excludeEmptyString: true })
    .max(35),
  addressLine1: Yup.string()
    .matches(alphaNum, {message: "Alphanumeric characters only", excludeEmptyString: true })
    .required('required')
    .max(35),
  addressLine2:  Yup.string()
    .matches(alphaNum, {message: "Alphanumeric characters only", excludeEmptyString: true })
    .max(40),
  county: Yup.string()
    .test('county', 'cannot be empty', value => value !== 'Please Select')
    .required('required'),
  town: Yup.string()
    .matches(alpha, {message: "Alphabet characters only", excludeEmptyString: true })
    .max(35),
  country: Yup.string()
    .matches(alpha, {excludeEmptyString: true })
    .required('required'),
  message: Yup.string()
    .matches(alpha, {excludeEmptyString: true })
    .required('required'),
});
```
