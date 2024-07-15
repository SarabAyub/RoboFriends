import React from 'react'
import { useParams , useNavigate} from 'react-router-dom'
import { useFormik } from 'formik';
import { useRobots } from './useRobots';
import { NavBar } from './NavBar';


export const Edit = () => {
    const { robots , updateRobot } = useRobots(); 
    console.log(' Edit Robots Component', robots)
    const { id } = useParams();
    const navigate = useNavigate();
    // const robos = rs.getRobots();
    const findIndexByID = (id) => {
        return robots.findIndex( robo => robo.id === id )
    }
    const i = findIndexByID(id);

    const formik = useFormik({
        initialValues : {
            name :robots[i]?.name,
            userName :robots[i]?.userName,
            email : robots[i]?.email
        },
        onSubmit : values => {
            updateRobot(id , values);
            navigate('/home')
        },
        validate : (values) => {
            let errors = {}
            if(!values.userName)
                errors.userName = 'Required'
            if(!values.name)
                errors.name = 'Required'
            if(!values.email)
                errors.email = 'Required'
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }

            return errors;
        }
    });
    


    return (
        <div>
            <NavBar />
            <div className='addRoboDiv'>
                <form className='roboForm' onSubmit={formik.handleSubmit}>
                    <div className='form-control'>
                        <label className='formLabel' htmlFor='name'>Name:</label>
                        <input className='form-input' type='text' id='name' name='name' onChange={formik.handleChange}  value={formik.values.name}/>
                        <p className='error'>{formik.errors.name?.message}</p>
                    </div>
                    <div className='form-control'>
                        <label className='formLabel' htmlFor='userName'>User Name:</label>
                        <input className='form-input' type='text' id='userName'name='userName' onChange={formik.handleChange} value={formik.values.userName}/>
                        <p className='error'>{formik.errors.userName?.message}</p>
                    </div>
                    <div className='form-control'>
                        <label className='formLabel' htmlFor='email'>Email:</label>
                        <input className='form-input' type='text' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
                        <p className='error'>{formik.errors.email?.message}</p>
                    </div>

                    <button className='addRoboBtn' type='submit' >Save Robot</button>
                </form>
            </div>
        </div>
    )
}
