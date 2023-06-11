import { Box, Grid, useMediaQuery } from '@mui/material'
import React, {useEffect, useState, createContext  } from 'react'
import SortingElement from './SortingElement'
import ItemCard from './ItemCard'
import AdminAddItemBtn from './AdminAddItemBtn';
import AddItemDialog from './AddItemDialog';


function MainPageCatalogue(props) {
  //const [adminMode, setAdminMode] = useState(false)
  //const { setAdminMode } = useContext(adminMode)
  const [watches, setWatches] = useState([{}])

  useEffect(() => {
    fetch('/api/watches').then(
      response => response.json()
    ).then(
      data => {
        setWatches(data)
        //setAdminMode(props.role === 'ADMIN')
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
  // console.log(adminMode)
  return (
    <Box sx={{
        backgroundColor: "#171A25",
        height: "fit-content",
    }}>
        <Grid container direction={isScreenSmall ? 'column' : 'row'} justifyContent="center" alignItems="center">
          {isScreenSmall ? (
            <>
              <Grid item xs={8} sm={6} md={4} lg={3}>
                <AdminAddItemBtn onClick={handleOpenDialog} />
              </Grid>
              <Grid item xs={8} sm={6} md={4} lg={3}>
                <SortingElement />
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={8} sm={6} md={4} lg={3}>
                <AdminAddItemBtn onClick={handleOpenDialog} />
              </Grid>
              <Grid item xs={4} sm={6} md={4} lg={3}>
                <SortingElement />
              </Grid>
            </>
          )}
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
            {watches.map(watch => {
                return (
                <Grid item lg={2.5}>
                    <ItemCard image={watch.image} id={watch._id}
                    title={watch.name} price={watch.price} />
                </Grid>);})
            }
        </Grid>    
        <AddItemDialog open={openAddItemDialog} onClose={handleCloseDialog} />
    </Box>
  )
}

export default MainPageCatalogue