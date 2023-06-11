import { Button } from '@mui/material'
import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { login_route } from '../../Routing/Routes'

function LoginBtn() {
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
           if(data.roles.indexOf('ADMIN') > -1 || data.roles.indexOf('USER') > -1){
            setLogined(true)
           } 
        })
            .catch(error => setLogined(false))
  }, [])
  if(logined) return null
  return (
    <Link to={login_route} >
      <Button variant='outlined'
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
      }}>Вхід</Button>
    </Link>
  )
}

export default LoginBtn