import { Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'

function ItemCounter() {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };
  return (
    <Grid container direction="row">
        <Grid item>
            <Button variant='outlined' sx={{
                color: "white",
                borderColor: "white",
                fontFamily: "Montserrat",
                fontSize: '26px',
                fontWeight: "600px",
                textTransform: 'none',
                lineHeight: '24px',
                width: '40px',
                height: '40px',
                borderRadius: '60px',
                padding: 0,
                "&:hover": {
                    backgroundColor: "white",
                    color: 'black',
                },
            }} onClick={handleDecrease}>-</Button>
        </Grid>
        <Grid item>
            <Typography paddingLeft="20px" paddingRight="20px" paddingTop='10px' 
                    sx={{color: 'white', 
                        justifyContent: 'center',
                        textAlign: 'center',
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '26px',
                        lineHeight: '24px',
                    }}>{count}</Typography>
        </Grid>
        <Grid item>
            <Button variant='outlined' sx={{
                color: "white",
                borderColor: "white",
                fontFamily: "Montserrat",
                fontSize: '26px',
                fontWeight: "600px",
                textTransform: 'none',
                lineHeight: '24px',
                width: '40px',
                height: '40px',
                borderRadius: '60px',
                padding: 0,
                "&:hover": {
                    backgroundColor: "white",
                    color: 'black',
                },
            }} onClick={handleIncrease}><Typography>+</Typography></Button>
        </Grid>
    </Grid>
  )
}

export default ItemCounter