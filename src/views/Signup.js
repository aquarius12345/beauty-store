import React, { useState } from 'react';
import './Signup.css';
import api from '../configs/api';


const INITIAL_FORMVALUES = {
    name: "",
    email: "",
    password: ""
}

const Signup = () => {

    const [formValues, setFormValues] = useState({ ...INITIAL_FORMVALUES });
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const [loginValues, setLoginValues] = useState({ ...INITIAL_FORMVALUES });
    const [errorLog, setErrorLog] = useState('');

    const handleInputChange = ({ target: { value, name }}) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await api.post('/user-auth/signup', formValues);
            setMessage('Account created succesfully!');
        } catch(error) {
            setError(error.response.data.error);
        }
    };

    const handleLoginInput = ({ target: { value, name } }) => {
        setLoginValues({ ...loginValues, [name]: value });
    };

    const loginSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await api.post('/user-auth/login', loginValues);
            //console.log('response', response);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userName', response.data.msg.name);
            localStorage.setItem('userId', response.data.msg.id);
            window.location = '/'
    
        } catch(error) {
            // console.log('login error', error.response); //Object com dados do erro
            setErrorLog(error.response.data.error);
        }
    };

    return (
        <>
            <div className='signup'>
                <form onSubmit={handleSubmit}>
                    <h1>Create an Account</h1>
                    <p>Did you know? When you create an account, you get access to cool stuff</p>
                    <input type='text' name='name' placeholder='Username' onChange={handleInputChange}/>
                    <input type='email' name='email' placeholder='Email adress' onChange={handleInputChange}/>
                    <input type='password' name='password' placeholder='Password' onChange={handleInputChange}/>
                    {error ? <span style={{color: 'red'}}>{error}</span> : <span style={{color: 'blue'}}>{message}</span>}
                    <button id='signup-btn' type='submit'>Create Account</button>    
                </form>

                <form onSubmit={loginSubmit}>
                    <h1>Log In</h1>
                    <p>Welcome back! Login into your account here:</p>
                    <input type='email' placeholder='Email adress' name='email' onChange={handleLoginInput}/>
                    <input type='password' placeholder='Password' name='password' onChange={handleLoginInput}/>
                    {errorLog ? <span style={{color: 'red'}}>{errorLog}</span> : <span></span>}
                    <button id='login-btn' type='submit'>Login</button>
                </form>
            </div>
        </>
        
    );
};

export default Signup;

