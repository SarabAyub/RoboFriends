import React from 'react'
import { useFormik } from 'formik';
import RobotsService from '../RobotsService';
import { useNavigate } from 'react-router-dom';


export const SignUp = () => {
    const rs = new RobotsService();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues : {
            userName: '',
            password: ''
        },
        onSubmit : values => {
            rs.addAdmin(values)
            navigate('/login')
        },
        validate : (values) => {
            let errors = {}
            if(!values.userName)
                errors.userName = 'Required'
            if(!values.password)
                errors.password = 'Required'

            return errors;
        }
    })

  return (
    <div className='login-div'>
        <form className='roboForm' onSubmit={formik.handleSubmit}>
            <div className='form-control' >
                <label  className='formLabel' htmlFor='userName'>User Name:</label>
                <input  className='form-input' type='text' id='userName' name='userName' onChange={formik.handleChange}  value={formik.values.userName}/>
                <p className='error'>{formik.errors.userName}</p>
            </div>
            <div className='form-control' >
                <label  className='formLabel' htmlFor='password'>Password:</label>
                <input  className='form-input' type='password' id='password' name='password'  onChange={formik.handleChange}  value={formik.values.password}/>
                <p className='error'>{formik.errors.password}</p>
            </div>
            <button className='addRoboBtn' type='submit'>Sign Up</button>
        </form>
    </div>
  )
}
