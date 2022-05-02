import React, { Component } from 'react';
import { object, string, matches, email } from 'yup';
import { SIGN_UP_SHEMA } from '../../utilites';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const intialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};
function SignUpForm (props) {
  const formikSubmit = (value, formikBag) => {
    console.log(value, formikBag);
  };

  return (
    <Formik
      initialValues={intialValues}
      onSubmit={formikSubmit}
      validationSchema={SIGN_UP_SHEMA}
    >
      {formikProps => {
        return (
          <Form>
            <Field type='text' name='firstName' />
            <ErrorMessage 
            name='firstName' 
            component='p' 
            className='error-firstName'/>
            <Field type='text' name='lastName' />
            <Field type='email' name='email' />
            <Field type='password' name='password' />
            <ErrorMessage 
            name='password' 
            component='p' 
            className='error-firstName'/>


            <button type='submit'>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignUpForm;
