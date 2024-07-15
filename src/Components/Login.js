import React from 'react'
import './Login.css'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import RobotsService from '../RobotsService'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'



export const Login = () => {
    const rs = new RobotsService();
    const form = useForm()
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    const notify = () => {
        toast.warn("Incorrect User Name or Password!", {
            position: "top-center"
        });
    }

    const onSubmit = (data) => {
        if (rs.adminAuthentication(data)) {
            navigate('/home');
        }
        else {
            notify();
        }
    }

    return (
        <div className='login-div'>
            <form className='roboForm' onSubmit={handleSubmit(onSubmit)}>
                <div className='form-control'>
                    <label className='formLabel' htmlFor='userName'>User Name:</label>
                    <input className='form-input' type='text' id='userName' {...register('userName', {
                        required: {
                            value: true,
                            message: 'User Name is Required'
                        }
                    })} />
                    <p className='error'>{errors.userName?.message}</p>
                </div>
                <div className='form-control'>
                    <label className='formLabel' htmlFor='password'>Password:</label>
                    <input className='form-input' type='password' id='password' {...register('password', {
                        required: 'Password is Required'
                    })} />
                    <p className='error'>{errors.password?.message}</p>
                </div>
                <div>
                    <button className='addRoboBtn' type='submit' >Login</button>
                    <button className='addRoboBtn' onClick={() => navigate('/signup')} >Sign Up</button>
                </div>
            </form>
            <ToastContainer />
            <DevTool control={control} />
        </div>
    )
}
