import { Typography } from '@mui/material'
import React from 'react'

function CartSum(props) {
  return (
    <Typography sx={{
        color: 'white',
        paddingTop: '90px',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 500,
        textAlign: 'center',
        fontSize: '24px',
        lineHeight: '29px',
    }}>Сума замовлення $сума$ грн</Typography>
  )
}

export default CartSum