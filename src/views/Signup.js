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

    // const handleInputChange = (e) => {
    //     setFormValues({ ...formValues, [name]: e.target.value });
    // };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await api.post('/user-auth/signup', formValues);
            setMessage('Account created succesfully!');
        } catch(error) {
            console.log(error);
            setError('Error, missing fields');
        }
    };

    return (
        <>
            <div className='signup'>
                <form onSubmit={handleSubmit}>
                    <h1>Create an Account</h1>
                    <p>Did you know? When you create an account, you get access to cool stuff</p>
                    <input type='text' name='name' placeholder='Username' />
                    <input type='email' name='email' placeholder='Email adress' />
                    <input type='password' name='password' placeholder='Password' />
                    {error ? <span style={{color: 'red'}}>{error}</span> : <span>{message}</span>}
                    <button type='submit'>Create Account</button>
                    
                </form>

                <form>
                    <h1>Log In</h1>
                    <p>Welcome back! Login into your account here:</p>
                    <input type='email' placeholder='Email adress'/>
                    <input type='password' placeholder='Password'/>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </>
        
    );
};

export default Signup;

