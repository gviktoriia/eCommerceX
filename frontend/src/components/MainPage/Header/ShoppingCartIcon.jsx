import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { shopping_route } from '../../Routing/Routes';

function ShoppingCartIcon() {
  return (
    <Box>
      <Link to={shopping_route}>
        <Badge badgeContent={4} color="primary">
          <ShoppingCartOutlinedIcon style={{color: 'white', width: '36px', height: '36px',}} />
        </Badge>
      </Link>
    </Box>
  )
}

export default ShoppingCartIcon