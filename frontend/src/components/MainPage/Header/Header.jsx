import React from 'react'
import Menu from './Menu'
import LoginBtn from './LoginBtn'
import ShoppingCartIcon from './ShoppingCartIcon'
import SearchBar from './SearchBar'
import { Grid } from '@mui/material'



function Header() {
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center" 
          paddingTop={{ xs: '20px', sm: '30px', md: '36px' }}
          paddingBottom={{ xs: '30px', sm: '36px', md: '40px' }}>
      <Grid item xs={12} sm={6} md={5}>
        <Menu />
      </Grid>
      {window.location.href.includes('login') || window.location.href.includes('signup') ||
          window.location.href.includes('cart') || window.location.href.includes('details') ? 
          null :
          <Grid item xs={12} sm={6} md={2}>
            <SearchBar />
          </Grid>}
      <Grid item xs={6} sm={4} md={3}>
        {window.location.href.includes('login') || window.location.href.includes('signup') ? null : <LoginBtn /> }
      </Grid>
      <Grid item xs={6} sm={2} md={1}>
        <ShoppingCartIcon />
      </Grid>
    </Grid>
  )
}

export default Header