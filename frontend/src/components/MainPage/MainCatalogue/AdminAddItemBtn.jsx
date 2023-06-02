import { Button, useMediaQuery } from '@mui/material'
import React from 'react'

function AdminAddItemBtn({onClick}) {
  return (
    <Button variant='outlined' onClick={onClick}
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