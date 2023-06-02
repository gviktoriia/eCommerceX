import {CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import ItemCounter from './ItemCounter'

function ShoppingCartItem(props) {
  return (
    <Grid
      container
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent="center"
      margin="auto"
      sx={{
        borderBottom: '1px solid white',
        justifyContent: 'center',
      }}
      maxWidth="fit-content"
    >
      <Grid
        item
        width={{ md: "200px", sm: "160px", xs: "220px" }}
        marginLeft={{ md: "60px", sm: "0px" }}
        marginTop='10px'
        marginBottom='10px'  
      >
        <CardMedia
          component="img"
          alt="Watch item"
          image={props.image}
          maxHeight="180px"
          maxWidth="180px"
        />
      </Grid>
      <Grid
        item
        direction="column"
        paddingLeft={{ md: "60px", sm: "30px" }}
        paddingTop={{ lg: "42px", md: "20px" }}
        textAlign={{ xs: 'center', sm: 'inherit' }}
      >
        <Grid item>
          <Typography
            sx={{
              color: 'white',
              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '26px',
              lineHeight: '24px',
            }}
          >
            {props.title}
          </Typography>
        </Grid>
        <Grid
          item
          paddingTop={{ xs: '20px', sm: '16px' }}
          display="flex"
          alignItems={{ xs: 'center', sm: 'inherit' }}
        >
          <ItemCounter />
        </Grid>
      </Grid>
      <Grid
        item
        paddingTop={{ xs: '10px', sm: '40px', md: '50px', lg: '50px' }}
        paddingBottom={{ xs: '10px', sm: '0px', md: '0px', lg: '0px' }}
        paddingLeft={{ xs: '10px', sm: '10px', md: '80px', lg: '240px' }}
        display="flex"
        alignItems={{ xs: 'center', sm: 'inherit' }}
      >
        <Typography
          sx={{
            color: 'white',
            fontFamily: 'Montserrat',
            fontSize: '24px',
            lineHeight: '29px',
            fontWeight: '500',
            fontStyle: 'normal',
          }}
        >
          {props.price} грн
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ShoppingCartItem