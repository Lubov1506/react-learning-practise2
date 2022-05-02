import React, { Component } from 'react';
import Header from '../../../components/FormTask/Header';
import LoginForm from '../../../components/FormTask/LoginForm';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignPage from '../SignUpPage'

class LoginPage extends Component {
    render() {
        return (
            <>
             <BrowserRouter>
              <Link to='/signUp'><button>SignUp
                  </button> </Link>
            <Header pHeading=' ' heading='LOGIN TO YOUR ACCOUNT'
            >
              
            </Header>
           
            <Routes>
            <Route path='/signUp' element={<SignPage/>}/>
            </Routes>
            </BrowserRouter>
            <LoginForm/>
            </>
        );
    }
}

export default LoginPage;
