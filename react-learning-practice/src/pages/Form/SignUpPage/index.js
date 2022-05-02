import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Header from '../../../components/FormTask/Header';
import SignUpForm from '../../../components/FormTask/SignUpForm';
import LoginPage from '../LoginPage';

class SignUpPage extends Component {
    render() {
        return (
            <>
            <BrowserRouter>
            
            <Link to='/loginPage' ><button>LOGIN</button></Link>
            <Header>
            
            </Header>
            <SignUpForm/>
            <Routes>
              <Route path='/loginPage' element={<LoginPage/>}/>   
            </Routes>
           
            </BrowserRouter>
            </>
        );
    }
}

export default SignUpPage;
/* 

*/