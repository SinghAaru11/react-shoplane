import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import login from '../login.json';

function Login() {
    const [formData, dataUpdate] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const submitForm = (values) => {
        console.log('Form values:', values);

        let userFound = false;
        login.forEach(userdetail => {
            if (userdetail.email === values.email && userdetail.password === values.password) {
                userFound = true;
                console.log(`This is the user id ${userdetail.id}, email ${userdetail.email}, and password is ${userdetail.password}`);
                alert('Congratulations, login is successful!');
                navigate('/product'); // Navigate to home page or any other page after successful login
            }
        });

        if (!userFound) {
            alert('Login is not successful. Please sign up Again. credentials  mail: user@email.com /newuser@email.com   credentials password:Password@123 / Password@1234');
           
              
            navigate('/signup');
        }
    };

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .required("Email is required!")
            .email("Invalid Email"),
        password: Yup.string()
            .required("Password is required!")
            .min(8, "Password should not be less than 8 characters")
            .max(30, "Password is too long!")
            .matches(/^(?=.*[a-z])/, "Password must contain at least one lowercase character")
            .matches(/^(?=.*[A-Z])/, "Password must contain at least one uppercase character")
            .matches(/^(?=.*[0-9])/, "Password must contain at least one number")
    });

    return (
        <div className='main-container'>
            <div className='form-section'>
                <h1>Login</h1>
                <Formik
                    initialValues={formData}
                    validationSchema={LoginSchema}
                    onSubmit={submitForm}
                >
                    {({ errors}) => (
                        <Form id="form">
                           <Field id="email" name="email" type="email"placeholder="Email Address"/>
                        <span> {errors.email}</span>
                        <Field id="password"name="password"type="password"placeholder="Password"/>
                        <span> {errors.password}</span>
                            <p>Don't have an account? Sign up <Link to='/signup'>here.</Link></p>
                            <button id="formSubmit" className="btn-submit" type='submit'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z" />
                                    <path fillRule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                                </svg>
                                &nbsp;Login
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Login;
