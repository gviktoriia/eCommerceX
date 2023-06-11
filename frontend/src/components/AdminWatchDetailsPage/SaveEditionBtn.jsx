import { Button } from '@mui/material'
import React from 'react'

function SaveEditionBtn(props) {
  return (
    <Button onClick={props.onClick} variant='outlined' sx={{
        color: "white",
        borderColor: "White",
        fontFamily: "Montserrat",
        fontSize: '22px',
        marginTop: '30px',
        fontWeight: "500px",
        textTransform: 'none',
        width: 'fit-content',
        height: '40px',
        borderRadius: '40px',
        "&:hover": {
            backgroundColor: "white",
            color: 'black',
        },
    }}>Зберегти зміни</Button>
  )
}

export default SaveEditionBtn