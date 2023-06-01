import { Button, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { checkout_route } from '../Routing/Routes'

function CheckoutBtn() {
  return (
    <Link to={checkout_route}>
      <Grid textAlign='center' paddingTop='70px' >
          <Button variant='outlined' sx={{
              color: 'white',
              borderColor: 'white',
              fontFamily: 'Montserrat',
              fontSize: '24px',
              fontWeight: '600',
              textTransform: 'none',
              lineHeight: '29px',
              width: { xs: '90%', sm: '400px', md: '450px' },
              height: '70px',
              borderRadius: '40px',
              '&:hover': {
                backgroundColor: 'white',
                color: 'black',
              },
          }}>Оформити замовлення</Button>
      </Grid>
    </Link>
  )
}

export default CheckoutBtn