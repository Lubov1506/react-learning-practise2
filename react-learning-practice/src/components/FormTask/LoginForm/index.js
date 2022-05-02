import { Checkbox } from '@mui/material';
import { Field, Formik, Form } from 'formik';
import React, { Component } from 'react';
import style from './LoginForm.module.css';

class LoginForm extends Component {
    render() {
        return (
            <label>
             <Formik>
            {(formikProps)=>{
                return(
                    <Form className={style.container}>
                       
                         <Field
                        type='email'
                        name='email'
                        placeholder='Email address'/>
                        <Field
                        type='password'
                        name='password'
                        placeholder='Password'/>     

                        <button type='submit'>LOGIN</button>
                       
                    
                    </Form>
                )
            }}                
        </Formik> 
         </label>  
        );
    }
}

export default LoginForm;
