import { Input } from '@mui/material'
import React, { useState, useContext } from 'react'
import { SearchBarContext } from './SearchBarContext'

function SearchBar() {

  const {search, setSearch} = useContext(SearchBarContext)

  const handleChange = (event) => {
    setSearch(event.target.value)
  }
  return (
      <Input onChange={handleChange} variant='standard'
        placeholder="Шукати..."
        sx={{
          fontFamily: 'Montserrat',
          fontStyle: 'normal',
          fontWeight: 200,
          fontSize: "20px",
          color: "white",
          width: '180px',
        }} />
  )
}

export default SearchBar