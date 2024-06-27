import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import React from 'react';
import * as Yup from 'yup';

function SignUp() {
    const navigate = useNavigate();

    const submitForm = (values, actions) => {
        console.log('Form values:', values);
        alert('Congratulations! Your Sign-Up is successful. Now go to the login page.');
        navigate('/product'); // Navigate to the product page after successful signup
        actions.setSubmitting(false); // Set submitting state to false after submission.
    };

    const SignUpSchema = Yup.object().shape({
        name: Yup.string()
            .required("Name is required!")
            .min(4, "Name should be at least 4 characters"),
        lastName: Yup.string()
            .required("Last Name is required!")
            .min(4, "Last Name should be at least 4 characters"),
        email: Yup.string()
            .required("Email is required!")
            .email("Invalid Email"),
        password: Yup.string()
            .required("Password is required!")
            .min(8, "Password should not be less than 8 characters")
            .max(20, "Password is too long!")
            .matches(/^(?=.*[a-z])/, "Password must contain at least a lowercase character")
            .matches(/^(?=.*[A-Z])/, "Password must contain at least an uppercase character")
            .matches(/^(?=.*[0-9])/, "Password must contain at least one number"),
        rePassword: Yup.string()
            .required("Confirm Password is required!")
            .oneOf([Yup.ref('password'), null], "Passwords must match")
    });

    return (
        <div className='signup-container'>
            <div className='form-container'>
                <h1>Sign Up</h1>
                <Formik 
                    initialValues={{
                        name: '',
                        lastName: '',
                        email: '',
                        password: '',
                        rePassword: ''
                    }} 
                    validationSchema={SignUpSchema} 
                    onSubmit={submitForm}>
                    {({ errors }) => (
                        <Form id="form">
                             <Field id="firstName" name="name"  type="text"placeholder="First Name"/>
                        <span>{errors.name}</span>
                        <Field id="lastName" name="lastName" type="text"placeholder="Last Name"/>
                        <span>{errors.lastName}</span>
                        <Field id="email" name="email" type="email"placeholder="Email Address"/>
                        <span> {errors.email}</span>
                        <Field id="password"name="password"type="password"placeholder="Password"/>
                        <span> {errors.password}</span>
                        <Field id="c-password"name="rePassword" type="password" placeholder="Confirm Password"/>
                        <span> {errors.rePassword}</span>

                            <p>Already have an account? Login <Link to='/login'>here.</Link></p>
                            <button id="formSubmit" className="submit-btn" type='submit'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-vcard" viewBox="0 0 16 16">
                                    <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"/>
                                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z"/>
                                </svg>&nbsp;Sign Up
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default SignUp;
