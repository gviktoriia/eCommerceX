import React, { useState } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { shopping_route } from '../../Routing/Routes';

function ShoppingCartIcon() {

  var itemsInCart
  if (localStorage.getItem('cart') !== null) {
    itemsInCart = JSON.parse(localStorage.getItem('cart')).bucket.length

  } else {
    itemsInCart = 0
  }

  return (
    <Box>
      <Link to={shopping_route}>
        <Badge badgeContent={itemsInCart} color="primary">
          <ShoppingCartOutlinedIcon style={{ color: 'white', width: '36px', height: '36px', }} />
        </Badge>
      </Link>
    </Box>
  )
}

export default ShoppingCartIcon