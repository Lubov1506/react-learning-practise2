import React, { useCallback, useReducer } from 'react';

const reducer = (state, action) =>{
    const {name, value} = action;
    const newState = {
        ...state, 
        [name]: value
    }
    return newState;
}
const SignUp = () => {
    const [state, dispatch] = useReducer(reducer, {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        birthDate: '',
        gender: ''
    })
    const handleChange = ({target: {name, value}}) => {
        const action = {name, value}
        dispatch(action)
    }
    const showInputValue = useCallback(({target: {name, value}}) => {
        const action = {name, value}
         return (
         <p>{action}</p> 
         )
    })

    return (
        <> 
        <form>
            <input type='text' name='firstName' value={state.firstName} onChange={handleChange}/>
            <input type='text' name='lastName' value={state.lastName} onChange={handleChange}/>
            <input type='text' name='email' value={state.email} onChange={handleChange}/>
            <input type='password' name='password' value={state.password} onChange={handleChange}/>
            <input type='date' name='birthDate' value={state.birthDate} onChange={handleChange}/>
            <input type='text' name='gender' value={state.gender} onChange={handleChange}/>
            <input type='submit'/>
        </form>
        <div style={{width: '100%', height:'2rem', border: '2px solid black'}} onChange={showInputValue}>
           
        </div>
        </>

    );
}

export default SignUp;
