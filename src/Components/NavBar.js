import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/addrobot'>Add Robot</Link>
                </li>
                <li>
                    <Link to='/login'>Log Out</Link>
                </li>
            </ul>
        </div>
    )
}
