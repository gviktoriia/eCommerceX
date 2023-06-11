import { Button, useMediaQuery } from '@mui/material'
import React, {useEffect, useState } from 'react'

function AdminAddItemBtn(props) {
  
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
           if(data.roles.indexOf('ADMIN') > -1){
            setAdminMode(true)
           } else {
            setAdminMode(false)
           }
        })
            .catch(error => console.log('error'))
  }, [])
  if(!adminMode) return null
  return (
    <Button variant='outlined' onClick={props.onClick}
    sx={{
        color: "white",
        borderColor: "White",
        fontFamily: "Montserrat",
        fontSize: '22px',
        marginTop: '30px',
        fontWeight: "500px",
        textTransform: 'none',
        width: '230px',
        height: '40px',
        borderRadius: '40px',
        "&:hover": {
            backgroundColor: "white",
            color: 'black',
        },
    }}>Додати товар</Button>
  )
}

export default AdminAddItemBtn