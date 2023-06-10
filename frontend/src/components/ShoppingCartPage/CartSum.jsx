import { Typography } from '@mui/material'
import React from 'react'

function CartSum({ items }) {
  const totalSum = (items.reduce((sum, item) => sum + parseInt(item.price), 0))/100;
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
    }}>Сума замовлення {totalSum} грн</Typography>
  )
}

export default CartSum