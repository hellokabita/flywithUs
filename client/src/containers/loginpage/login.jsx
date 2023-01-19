import React from "react";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { message } from 'antd';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import ShowhidePassword from "../../components/showhidePassword";
import { useDispatch } from "react-redux"
import {setUserDetails}  from "../../reducers/userSlice"
import video from '../../background/video1.mp4'
import './login.css'


const Login = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
 
    const loginUser = async(values, resetForm)=>{
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };

        const response = await fetch("http://localhost:5000/login", requestOptions);
        const data = await response.json()
        console.log(data)
        if(data.msg === 'login success'){
            dispatch(setUserDetails(data.userDetails))
            message.success(data.msg)
            
        }else{
            message.error(data.msg)
        }
    }
    const SignupSchema = Yup.object().shape({
		password: Yup.string().required('Required'),
		email: Yup.string().email('Invalid email').required('Required'),
	});
    return(
        <section className="home">
            <div className='overlay'></div>
            {/* <video src={video} muted autoPlay loop type="video/mp4"></video> */}
                <div className='homeContent container'>
                    <div className="textDiv">
                    <h1 className='homeTitle'>LOGIN HERE
            </h1>
                    </div>
                   
                    <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={(values, { resetForm })=>{
                            loginUser(values)
                            // resetForm()
                        }}
                    >

                        {({ errors, touched, values, handleChange, handleBlur, handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>

                            <div className="CarDiv grid">
                            <div className='destinationInput'>
                            <label htmlFor='name'>Your email</label>
                            <div className='input flex'>
                            <Field name="email" placeholder="Enter Email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                {errors.email && touched.email ? (<div className="error">{errors.email}</div>) : null}

                            </div>
                            </div>
                            <div className='destinationInput'>
                            <label htmlFor='name'>Your password</label>
                            <div className='input flex'>
                            <Field name="password" placeholder="Enter Password" value={values.password} component={ShowhidePassword} onChange={handleChange} onBlur={handleBlur} />
                                {errors.password && touched.password ? <div className="error">{errors.password}</div> : null}

                            </div>
                            </div>
                            {/* <div className="button"> */}


                            {/* </div> */}
                            
                            </div>
                            <button className="button" type="submit">Login</button>

                                
                         </Form>
                        )}
                    </Formik>
                    <p style={{ marginTop: '10px' }}>Dont have an account? <Link to="/register">Signup</Link> here</p>
                </div>
            
        </section>
    )
}
export default Login