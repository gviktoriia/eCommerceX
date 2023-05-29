import { Grid, TextField } from '@mui/material'
import React from 'react'

function LoginTextField(props) {
  return (
    <Grid textAlign='center' paddingBottom="40px">
        <TextField id="outlined-basic" variant="outlined"  label={props.title} 
        type={props.type}
        onChange={props.onChange}
        sx={{ border: "1px solid #4D4D4D",
        borderRadius: "10px", 
        width: { xs: 210, sm: 390, md: 420, xl: 450 },
        "& .MuiInputBase-root": {height: 60}, 
        "& .MuiInputLabel-root": {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '29px',
            color: '#4D4D4D',
          },
        justifyContent: 'center'}}
        inputProps={{
          style: {
            color: 'white', 
          },
        }}/>
    </Grid>
  )
}

export default LoginTextField