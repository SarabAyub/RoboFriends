import React, { useState } from "react";
import './Card.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
// import RobotsService from "../RobotsService";

const Card = ({name , email , id, onDelete}) => {
    const navigate = useNavigate();
    // const rs = new RobotsService();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleEdit = () => {
        handleClose();
        navigate(`/edit/${id}`)
    };

    const handleDelete = () => {
        handleClose();
        onDelete(id);
    };

    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
           <MoreHorizIcon 
                className="icon" 
                color="disabled" 
                fontSize="large" 
                onClick={handleClick} 
            />
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
            <img alt="robos" src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;