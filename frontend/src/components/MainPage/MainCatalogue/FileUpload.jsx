import { Button, Grid, Input } from '@mui/material'
import React, { useState } from 'react'

function FileUpload(props) {
    const [file, setFile] = useState(null);

    const handleFile = (e) => {
      setFile(e.target.files[0])
    }

  return (
    <Grid container direction='column'>
        <Grid item xs={1} textAlign='center'>
          <Input type='file' accept="image/*" sx={{color: 'white', marginTop: '30px' }} onChange={props.handleFile}></Input>
        </Grid>
        <Grid item xs={1} textAlign='center' justifyContent='center'>
          <Button sx={{backgroundColor:"white",
              color: "black",
              textTransform: "none",
              borderRadius: "1.875rem",
              fontFamily: 'Montserrat',
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "20px",
              marginTop: '15px',
              '&:hover': {
                backgroundColor: 'white',
              }}}>Завантажити фото</Button>
        </Grid>
    </Grid>
  )
}

export default FileUpload