import { Box, Grid } from '@mui/material';
import React, { useState } from 'react'
import SortingElement from '../MainPage/MainCatalogue/SortingElement';
import ItemCard from '../MainPage/MainCatalogue/ItemCard';
import AdminAddItemBtn from '../MainPage/MainCatalogue/AdminAddItemBtn';
import AddItemDialog from '../MainPage/MainCatalogue/AddItemDialog';

const array = [{title : "Fossil Leather Watch", price: "6873"},
                {title : "Fossil Leather Watch", price: "6873"},
                {title : "Fossil Leather Watch", price: "6873"},
                {title : "Fossil Leather Watch", price: "6873"},
                {title : "Fossil Leather Watch", price: "6873"},
                {title : "Fossil Leather Watch", price: "6873"},
                {title : "Fossil Leather Watch", price: "6873"},
                {title : "Fossil Leather Watch", price: "6873"},
                {title : "Fossil Leather Watch", price: "6873"},];

function SmartWatchCatalogue() {
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
        minHeight: "100vh",
        padding: "20px",
    }}>
        <Grid container direction="row" justifyContent='center'>
          <Grid item>
            <AdminAddItemBtn onClick={handleOpenDialog} />
          </Grid>
          <Grid item>
            <SortingElement />
          </Grid>
        </Grid>
        <Grid
          container
          columnSpacing={{ xs: 2, sm: 4 }}
          rowSpacing={5}
          sx={{
            textAlign: 'center',
            width: "100%",
            paddingBottom: "3%",
            paddingTop: "10px",
            margin: "0",
            alignItems: "center",
            justifyContent: "center"
          }}>
            {array.map(watch => (
              <Grid item key={watch.id} xs={12} sm={6} md={4} lg={3.4} xl={2.5}>
                <ItemCard
                  image="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  title={watch.title}
                  price={watch.price}
                />
              </Grid>
            ))}
        </Grid>    
        <AddItemDialog open={openAddItemDialog} onClose={handleCloseDialog} />
    </Box>
  )
}

export default SmartWatchCatalogue