import './Login.css'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import login from '../login.json';



function Login() {

    const [formData, dataUpdate] = useState({
        email: '',
        password: ''
    });




    let handleSubmit = (e) => {
        console.log(e)
        alert('congratulation login is Successfull')


    }

    let submitForm = (value) => {
debugger
        // console.log(value,login)

        login.forEach(userdetail => {

            if (userdetail.email === value.email && userdetail.password === value.password) {
                 console.log(userdetail)

                console.log(`this is the user email ${value.email} and password is ${value.password}`)
            }
        })

    }




    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .required("Email is required!")
            .email("Invalid Email"),

        password: Yup.string()
            .required("Password is required!")
            .min(8, "password should not be less than 8 chars")
            .max(30, "password is too long!")
            .matches(/^(?=.*[a-z])/, "Password must contain atleast a lowercase character")
            .matches(/^(?=.*[A-Z])/, "Password must contain atleast a uppercase character")
            .matches(/^(?=.*[0-9])/, "Password must contain at least a number")

    });


    return (

        <div className='main-container'>
            <div className='form-section'>
                <h1>Login</h1>
                {/* Formik Component after including 3 props 
            // namely initialValues, ValidationSchema (to bind Formik and Yup), onSubmit  */}
                {/* Another prop for Formik is onSubmit which takes values as a parameter and it is mostly used for post api calls to collect the data 
           out  of the form and then we can store the data in the server.  */}
                <Formik initialValues={formData} validationSchema={LoginSchema} onSubmit={submitForm}   >

                    {({ errors }) => (<Form id="form" method='post'>


                        <Field id="email" name="email" type="email" placeholder="Email Address" />
                        <span>{errors.email}</span>

                        <Field id="password" name="password" type="password" placeholder="Password" />
                        <span>{errors.password}</span>
                        {/* errors is used to display error messages set by the Yup object. */}
                        <p> Don't have an account? Sign up <Link to='/signup'>here.</Link></p>

                        {/* The Link component renders a component that can navigate to a screen on press. This renders an <a> tag when using on the Web and It uses a Text component on other platforms. It preserves the default behavior of anchor tags in the browser such as Right click -> Open link in new tab", Ctrl+Click/⌘+Click etc. to provide a native experience.

The path in the href for the <a> tag is generated based on your linking options. */}
                        <button id="formSubmit" className="btn-submit" onClick={handleSubmit} type='button'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z" />
                            <path fillRule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                        </svg>&nbsp;Login
                        </button>


                    </Form>)}
                </Formik>

            </div>
        </div>
    )
}



export default Login