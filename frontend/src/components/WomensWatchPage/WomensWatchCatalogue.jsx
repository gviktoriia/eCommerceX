import React, { useEffect, useState, useContext } from 'react'
import SortingElement from '../MainPage/MainCatalogue/SortingElement';
import { Box, Grid, useMediaQuery } from '@mui/material';
import ItemCard from '../MainPage/MainCatalogue/ItemCard';
import AdminAddItemBtn from '../MainPage/MainCatalogue/AdminAddItemBtn';
import AddItemDialog from '../MainPage/MainCatalogue/AddItemDialog';
import { SearchBarContext } from '../MainPage/Header/SearchBarContext';

function deleteByIndex(arr, index) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (index !== i)
      newArr.push(arr[i])
  }
  return newArr
}

function WomensWatchCatalogue() {
  
  const { search, setSearch } = useContext(SearchBarContext)
  const [sorting, setSorting] = useState('');
  const [watches, setWatches] = useState([{}])

  useEffect(() => {
    if (search !== '') {
      console.log(search)
      fetch(`/api/watches/substring/${search}`).then(
        response => response.json()
      ).then(
        data => {
          for (let i = 0; i < data.length; i++) {
            if (data[i].sex !== 'female') {
              data = deleteByIndex(data, i)
            }
          }
          setWatches(data)
        }
      ).catch(error => console.log(error))
    } else {
      fetch('/api/watches/sex/female').then(
        response => response.json()
      ).then(
        data => {
          setWatches(data)
        }
      )
    }
  }, [search])

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