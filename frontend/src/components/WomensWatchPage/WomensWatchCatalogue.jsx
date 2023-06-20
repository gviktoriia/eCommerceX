import React, { useEffect, useState } from 'react'
import SortingElement from '../MainPage/MainCatalogue/SortingElement';
import { Box, Grid, useMediaQuery } from '@mui/material';
import ItemCard from '../MainPage/MainCatalogue/ItemCard';
import AdminAddItemBtn from '../MainPage/MainCatalogue/AdminAddItemBtn';
import AddItemDialog from '../MainPage/MainCatalogue/AddItemDialog';

function WomensWatchCatalogue() {

  const [sorting, setSorting] = useState('');
  const [watches, setWatches] = useState([{}])

  useEffect(() => {
    fetch('/api/watches/sex/female').then(
      response => response.json()
    ).then(
      data => {
        setWatches(data)
      }
    )
  }, [])

  const [openAddItemDialog, setOpenAddItemDialog] = useState(false);
  const isScreenSmall = useMediaQuery('(max-width: 600px)');

  const handleOpenDialog = () => {
    setOpenAddItemDialog(true);
  }
  const handleCloseDialog = () => {
    setOpenAddItemDialog(false);
  }
  // cheaper first
  if (sorting === 10) {
    watches.sort(function (a, b) {
      return a.price - b.price
    })
    // expensive first
  } else if (sorting === 20) {
    watches.sort(function (a, b) {
      return b.price - a.price
    })
  }

  return (
    <Box sx={{
      backgroundColor: "#171A25",
      minHeight: "100vh",
      padding: "20px",
    }}>
      <Grid container direction={isScreenSmall ? 'column' : 'row'} justifyContent="center" alignItems="center">
        {isScreenSmall ? (
          <>
            <Grid item xs={8} sm={6} md={4} lg={3}>
              <AdminAddItemBtn onClick={handleOpenDialog} />
            </Grid>
            <Grid item xs={8} sm={6} md={4} lg={3}>
              <SortingElement setSorting={setSorting} />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={8} sm={6} md={4} lg={3}>
              <AdminAddItemBtn onClick={handleOpenDialog} />
            </Grid>
            <Grid item xs={4} sm={6} md={4} lg={3}>
              <SortingElement setSorting={setSorting} />
            </Grid>
          </>
        )}
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
        {watches.map(watch => (
          <Grid item key={watch.id} xs={12} sm={6} md={4} lg={3.4} xl={2.5}>
            <ItemCard
              id={watch._id}
              image={watch.image}
              title={watch.name}
              price={watch.price}
            />
          </Grid>
        ))}
      </Grid>
      <AddItemDialog open={openAddItemDialog} onClose={handleCloseDialog} />
    </Box>
  )
}

export default WomensWatchCatalogue