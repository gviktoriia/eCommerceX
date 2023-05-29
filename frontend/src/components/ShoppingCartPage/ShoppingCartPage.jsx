import { Box, Grid } from '@mui/material'
import React from 'react'
import Header from '../MainPage/Header/Header'
import Footer from '../MainPage/Footer/Footer'
import PageTitle from '../MensWatchPage/PageTitle'
import ShoppingCartItem from './ShoppingCartItem'
import CartSum from './CartSum'
import CheckoutBtn from './CheckoutBtn'

const array = [{title : "Fossil Leather Watch", price: "6873"},
                {title : "Fossil Leather Watch", price: "6873"},
                {title : "Fossil Leather Watch", price: "6873"},
                {title : "Fossil Leather Watch", price: "6873"},];

function ShoppingCartPage() {
  return (
    <Box sx={{
        backgroundColor: "#171A25",
        minHeight: "103vh",
        height: "fit-content",
    }}>
        <Header />
        <PageTitle title="Кошик" />
        {array.map(watch => {
                return (
                <Grid item lg={2.5} marginBottom=''>
                    <ShoppingCartItem image="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    title={watch.title} price={watch.price} />
                </Grid>);})
        }
        <CartSum />
        <CheckoutBtn />
        <Footer />
    </Box>
  )
}

export default ShoppingCartPage