import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Header from '../MainPage/Header/Header'
import Footer from '../MainPage/Footer/Footer'
import PageTitle from '../MensWatchPage/PageTitle'
import ShoppingCartItem from './ShoppingCartItem'
import CartSum from './CartSum'
import CheckoutBtn from './CheckoutBtn'
import NavBar from '../NavBar/NavBar'

// const array = [{title : "Fossil Leather Watch", price: "6873"},
//                 {title : "Fossil Leather Watch", price: "6873"},
//                 {title : "Fossil Leather Watch", price: "6873"},
//                 {title : "Fossil Leather Watch", price: "6873"},];

function ShoppingCartPage() {
  const cart = localStorage.getItem('cart');
  const watches = cart ? JSON.parse(cart).bucket : [];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [quantity, setQuantity] = React.useState(0);

  let idQuantity = {}
  for (let i = 0; i < watches.length; i++) {
    if (watches[i]._id in idQuantity) {
      idQuantity[watches[i]._id]++
    } else {
      idQuantity[watches[i]._id] = 1
    }
  }
  let displayWatches = []
  let ids = []
  for (let i = 0; i < watches.length; i++) {
    if(ids.indexOf(watches[i]._id) === -1) {
      displayWatches.push(watches[i])
      ids.push(watches[i]._id)
    } 
  }
  console.log(displayWatches)


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
        {watches.length === 0 ? (
          <Grid item xs={12} marginBottom="10px">
            <Typography sx={{
              color: 'white',
              fontFamily: 'Montserrat',
              fontSize: '20px',
              textAlign: 'center',
              marginTop: '50px',
              marginBottom: '50px',
            }}>Ви ще нічого не додали в корзину.</Typography>
          </Grid>
        ) : (displayWatches.map((watch, index) => (
          <Grid item key={index} xs={12} marginBottom="10px">
            <ShoppingCartItem
              id={watch._id}
              image={watch.image}
              title={watch.name}
              price={watch.price / 100}
              quantity={idQuantity[watch._id]}
            />
          </Grid>
        )))}
      </Grid>
      {watches.length > 0 && (
        <>
          <CartSum items={watches} />
          <CheckoutBtn />
        </>
      )}

      <Footer />
    </Box>
  )
}

export default ShoppingCartPage