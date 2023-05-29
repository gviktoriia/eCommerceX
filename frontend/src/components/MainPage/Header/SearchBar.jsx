import { Input } from '@mui/material'
import React from 'react'


function SearchBar() {
  return (
    <Input variant='standard'
      placeholder="Шукати..."
      sx={{fontFamily: 'Montserrat',
          fontStyle: 'normal',
          fontWeight: 200,
          fontSize: "20px",
          color: "white",
          width: '180px',
      }} />
  )
}

export default SearchBar