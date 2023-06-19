
import LandingPart from './Landing/LandingPart'
import MainPageCatalogue from './MainCatalogue/MainPageCatalogue'
import Footer from './Footer/Footer'
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'

export const SearchBarContext = React.createContext()

function MainPage() {
  // const search = useContext(SearchBarContext);
  const [search, setSearch] = useState('');
  return (
    <SearchBarContext.Provider value={{search, setSearch}}>
      <Box sx={{
        backgroundColor: "#171A25",
        minHeight: "103vh",
        maxHeight: "fit-content",
      }}>
        <LandingPart />
        <MainPageCatalogue />
        <Footer />
      </Box>
    </SearchBarContext.Provider>
  )
}

export default MainPage