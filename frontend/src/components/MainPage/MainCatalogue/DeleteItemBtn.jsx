import { Button, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { home_route } from '../../Routing/Routes'
import DeleteIcon from '@mui/icons-material/Delete';

function DeleteItemBtn(props) {
    const navigate = useNavigate()
    const handleDeleteClick = (e) => {
        e.stopPropagation();
        const url = `http://localhost:8888/api/watches/${props.id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
            if (data)
                navigate(home_route)
        })
            .catch(error => console.log('error'))
    };
    const [adminMode, setAdminMode] = useState(false)
    useEffect(() => {
        const url = "http://localhost:8888/auth/user";
        fetch(url, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            if (data.roles.indexOf('ADMIN') > -1) {
                setAdminMode(true)
            } else {
                setAdminMode(false)
            }
        })
            .catch(error => console.log('error'))
    }, [])
    if (!adminMode) return null
    return (
        <Link to={home_route}>
            <DeleteIcon style={{ position: 'absolute', top: "20px", right: "20px", color: 'black', background: 'none', zIndex: 1 }}
                onClick={handleDeleteClick} />
        </Link>
    )
}

export default DeleteItemBtn