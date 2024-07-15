import React from 'react'
import './AddRobot.css'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { useRobots } from './useRobots'
import { useNavigate } from 'react-router-dom'
import { NavBar } from './NavBar'

export const AddRobot = () => {
    const {addRobot } = useRobots();
    const form = useForm()
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = (data) => {
        addRobot(data);
        navigate('/home')
    }

    return (
        <div>
            <NavBar />
            <div className='addRoboDiv'>
                <form className='roboForm' onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-control'>
                        <label className='formLabel' htmlFor='name'>Name:</label>
                        <input className='form-input' type='text' id='name' {...register('name', {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })} />
                        <p className='error'>{errors.name?.message}</p>
                    </div>
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
                        <label className='formLabel' htmlFor='email'>Email:</label>
                        <input className='form-input' type='text' id='email' {...register('email', {
                            required: 'Email is Required', pattern: {
                                value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                                message: 'Invalid Email Address'
                            }
                        })} />
                        <p className='error'>{errors.email?.message}</p>
                    </div>

                    <button className='addRoboBtn' >Create Robot</button>
                </form>
                <DevTool control={control} />
            </div>
        </div>
    )
}
