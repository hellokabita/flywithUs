import React from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { message } from 'antd';
import ShowhidePassword from '../../../components/showhidePassword';
import { useNavigate, Link } from 'react-router-dom';


const Register = ()=>{
    const navigate = useNavigate()

    const registerUser = async(values)=>{
        try{
            const requestOptions = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            };
    
            const response = await fetch("http://localhost:5000/register", requestOptions);
            const data = await response.json()
    
            if(data.msg === "users registered"){
                message.success(data.msg)
                navigate('/login')
            }else{
                message.error(data.errmsg)
            }
        }catch(err){
            console.log(err)
        }
    }

    const passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

	const SignupSchema = Yup.object().shape({
		name: Yup.string().required('Required'),
		phoneNumber: Yup.string().required('Required'),
        Address: Yup.string().required('Required'),
		email: Yup.string().email('Invalid email').required('Required'),
		password: Yup.string()
			.required('Required')
			.min(6)
			.matches(passwordRule, { message: 'Please create a stronger password' }),
            confirmPassword: Yup.string()
			.oneOf([Yup.ref('password'), null], 'Passwords doesnt match'),
	});

    return(
        <section className='home'>
            <div className='overlay'></div>
            <div className='homeContent container'>
                <div className='textDiv'>
                <h1 className='homeTitle'>
              REGISTER
            </h1>
          </div>

                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            phoneNumber: '',
                            Address: '',
                            password: '',
                            userRole:'user'

                             }}
                        validationSchema={SignupSchema}
                        onSubmit={values=>{
                            registerUser(values)
                        }}
                    >

                        {({ errors, touched, values, handleChange, handleBlur, handleSubmit }) => (
                            <Form  onSubmit={handleSubmit}>
                                <Field name="name" placeholder="Your Name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
								{errors.name && touched.name ? (<div className="error">{errors.name}</div>) : null}

                                <Field name="email" placeholder="Your Email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                {errors.email && touched.email ? (<div className="error">{errors.email}</div>) : null}

                                <Field name="phoneNumber" placeholder="Your phoneNumber" value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur} />
                                {errors.phoneNumber && touched.phoneNumber ? (<div className="error">{errors.phoneNumber}</div>) : null}

                                <Field name="Address" placeholder="Your Address" value={values.Address} onChange={handleChange} onBlur={handleBlur} />
                                {errors.Address && touched.Address ? (<div className="error">{errors.Address}</div>) : null}
                                
                                {errors.userRole && touched.userRole ? (<div className="error">{errors.userRole}</div>) : null}

                                
                                
                                <Field name="password" placeholder="Your password" value={values.password} onChange={handleChange} onBlur={handleBlur} component={ShowhidePassword}/>
                                {errors.password && touched.password ? (<div className="error">{errors.password}</div>) : null}

                                {/* <select
									name="userRole"
									value={values.userRole}
									onChange={handleChange}
									onBlur={handleBlur}
								>
									<option
										value=""
										disabled="disabled"
										label="Select a Role"
									></option>
									<option value="user" label="User">
										User
									</option>
									<option value="admin" label="Admin">
										Admin
									</option>
                                </select>
								{errors.userRole && touched.userRole ? (
									<div className="error">{errors.userRole}</div>
								) : null} */}

                                
                                <button type="submit">Signup</button>
                            </Form>
                        )} 
                    </Formik>
                    <p style={{ marginTop: '10px' }}>Already have an account? Please <Link to="/login">Login</Link> to continue</p>
                
            </div>
        </section>
    )
}
export default Register