import { Box, Grid } from '@mui/material'
import React from 'react'
import Header from '../MainPage/Header/Header'
import Footer from '../MainPage/Footer/Footer'
import PageTitle from '../MensWatchPage/PageTitle'
import ShoppingCartItem from './ShoppingCartItem'
import CartSum from './CartSum'
import CheckoutBtn from './CheckoutBtn'
import NavBar from '../NavBar/NavBar'

const array = [{title : "Fossil Leather Watch", price: "6873"},
                {title : "Fossil Leather Watch", price: "6873"},
                {title : "Fossil Leather Watch", price: "6873"},
                {title : "Fossil Leather Watch", price: "6873"},];

function ShoppingCartPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Box sx={{
        backgroundColor: "#171A25",
        minHeight: "103vh",
        height: "fit-content",
    }}>
        <Header handleMenu={() => setIsMenuOpen(true)} />
        <NavBar menuOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
        <PageTitle title="Кошик" />
        <Grid container spacing={2} justifyContent="center">
        {array.map((watch, index) => (
          <Grid item key={index} xs={12} marginBottom="10px">
            <ShoppingCartItem
              image="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              title={watch.title}
              price={watch.price}
            />
          </Grid>
        ))}
        </Grid>
        <CartSum items={array} />
        <CheckoutBtn />
        <Footer />
    </Box>
  )
}

export default ShoppingCartPage