import { Grid } from '@mui/material'
import React from 'react'
import SortingIcon from './SortingIcon'
import SelectSortingOption from './SelectSortingOption'

function SortingElement({setSorting}) {
  return (
    <Grid container direction="row" justifyContent="flex-end" spacing={2}>
      <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
        <SortingIcon />
        <SelectSortingOption setSorting={setSorting} />
      </Grid>
    </Grid>
  )
}

export default SortingElement