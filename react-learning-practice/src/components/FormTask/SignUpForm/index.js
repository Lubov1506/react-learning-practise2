import { Form, Formik, Field } from 'formik';
import React, { Component } from 'react';
import style from './SignUpForm.module.css';

class SignUpForm extends Component {
    render() {
        return (
           <Formik>
               {(formikProps)=>{
                   return(
                       <Form>
                           <h1>CREATE AN ACCOUNT</h1>
                        <p>
                        We always keep your name and email address private.</p>
                        <Field
                        type='text'
                        name='firstName'
                        placeholder='First name'/>
                       <Field
                        type='text'
                        name='lastName'
                        placeholder='Last name'/>
                        <Field
                        type='text'
                        name='displayName'
                        placeholder='Display name'/>
                        <Field
                        type='email'
                        name='email'
                        placeholder='Email address'/>
                        <Field
                        type='password'
                        name='password'
                        placeholder='Password'/>           
                        <Field
                        type='password'
                        name='passwordConfirmation'
                        placeholder='Password Confirmation'/>     
                       
                       </Form>
                   )
               }}
           </Formik>
        );
    }
}

export default SignUpForm;
