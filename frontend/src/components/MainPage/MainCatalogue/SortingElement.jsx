import { Box, Grid } from '@mui/material'
import React from 'react'
import SortingIcon from './SortingIcon'
import SelectSortingOption from './SelectSortingOption'

function SortingElement() {
  return (
    <Grid container direction="row" justifyContent="flex-end" sx={{ paddingRight: '250px' }} spacing={2}>
        <Grid item marginTop="40px">
            <SortingIcon />
        </Grid>
        <Grid item marginTop="12px">
            <SelectSortingOption />
        </Grid>
    </Grid>
  )
}

export default SortingElement