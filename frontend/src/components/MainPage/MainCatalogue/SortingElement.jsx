import { Box, Grid } from '@mui/material'
import React from 'react'
import SortingIcon from './SortingIcon'
import SelectSortingOption from './SelectSortingOption'

function SortingElement() {
  return (
    <Grid container direction="row" justifyContent="flex-end" spacing={2}>
      <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
        <SortingIcon />
        <SelectSortingOption />
      </Grid>
    </Grid>
  )
}

export default SortingElement