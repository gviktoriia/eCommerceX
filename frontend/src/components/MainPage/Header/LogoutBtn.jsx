import { Button } from '@mui/material'
import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { home_route } from '../../Routing/Routes'

function LogoutBtn() {
    const [logined, setLogined] = useState(false)
    useEffect(() => {
        const url = "http://localhost:8888/auth/user";
        fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            if (data.roles.indexOf('ADMIN') > -1 || data.roles.indexOf('USER') > -1) {
                setLogined(true)
            }
        })
            .catch(error => setLogined(false))
    }, [])

    const handleClick = (e) => {
        localStorage.removeItem('token')
        window.location.reload();
    }

    if (!logined) return null
    return (
        <Link to={home_route} >
            <Button onClick={handleClick} variant='outlined'
                sx={{
                    color: "white",
                    borderColor: "White",
                    fontFamily: "Montserrat",
                    fontSize: '22px',
                    fontWeight: "500px",
                    textTransform: 'none',
                    width: 'fit-content',
                    height: '36px',
                    borderRadius: '40px',
                    "&:hover": {
                        backgroundColor: "white",
                        color: 'black',
                    },
                }}>Вихід</Button>
        </Link>
    )
}

export default LogoutBtn