import {CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import ItemCounter from './ItemCounter'

function ShoppingCartItem(props) {
  return (
    <Grid container direction="row" justifyContent="center"> 
        <Grid item height="180px" width="180px" marginLeft="60px" marginTop='10px' marginBottom='10px'>
          <CardMedia
                  component="img"
                  alt="Watch item"
                  height="180px"
                  width="180px"
                  image={props.image} />
        </Grid>
        <Grid item direction="column" paddingLeft="60px">
          <Grid item >
            <Typography sx={{
              color: 'white',
              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '26px',
              lineHeight: '24px',
              paddingTop: '42px',
            }}>{props.title}</Typography>
          </Grid>
          <Grid item paddingTop="40px">
            <ItemCounter />
          </Grid>
        </Grid>
        <Grid item paddingTop='10px' paddingLeft={{ xs: '20px', sm: '40px', md: '290px' }}>
          <Typography sx={{
            color: 'white',
            fontFamily: 'Montserrat',
            fontSize: '24px',
            lineHeight: '29px',
            fontWeight: '500',
            fontStyle: 'normal',
          }}>{props.price} грн</Typography>
        </Grid>
    </Grid>
  )
}

export default ShoppingCartItem