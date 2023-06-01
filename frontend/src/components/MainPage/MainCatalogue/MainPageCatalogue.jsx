import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import SortingElement from './SortingElement'
import ItemCard from './ItemCard'
import AdminAddItemBtn from './AdminAddItemBtn';
import AddItemDialog from './AddItemDialog';

const array = [{title : "Fossil Leather Watch", price: "6873"},
                {title : "Fossil Leather Watch", price: "6873"},
                {title : "Fossil Leather Watch", price: "6873"},
                {title : "Fossil Leather Watch", price: "6873"},
                {title : "Fossil Leather Watch", price: "6873"},
                {title : "Fossil Leather Watch", price: "6873"},
                {title : "Fossil Leather Watch", price: "6873"},
                {title : "Fossil Leather Watch", price: "6873"},
                {title : "Fossil Leather Watch", price: "6873"},];

function MainPageCatalogue() {
  const [openAddItemDialog, setOpenAddItemDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenAddItemDialog(true);
  }

  const handleCloseDialog = () => {
    setOpenAddItemDialog(false);
  }

  return (
    <Box sx={{
        backgroundColor: "#171A25",
        height: "fit-content",
    }}>
        <Grid container direction="row" justifyContent='center' columnSpacing={18} alignItems="center" wrap="wrap">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AdminAddItemBtn onClick={handleOpenDialog} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <SortingElement />
        </Grid>
      </Grid>
        <Grid container columnSpacing={4} rowSpacing={5} sx={{
                  textAlign: 'center',
                  width: "100%",
                  paddingBottom: "3%",
                  paddingTop: "30px",
                  margin: "0",
                  direction: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
            {array.map(watch => {
                return (
                <Grid item lg={2.5}>
                    <ItemCard image="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    title={watch.title} price={watch.price} />
                </Grid>);})
            }
        </Grid>    
        <AddItemDialog open={openAddItemDialog} onClose={handleCloseDialog} />
    </Box>
  )
}

export default MainPageCatalogue