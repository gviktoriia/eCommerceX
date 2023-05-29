import React from 'react'
import LandingPart from './Landing/LandingPart'
import MainPageCatalogue from './MainCatalogue/MainPageCatalogue'
import Footer from './Footer/Footer'
import { Box } from '@mui/material'

function MainPage() {

  return (
    <Box sx={{
      backgroundColor: "#171A25",
      minHeight: "103vh",
      maxHeight: "fit-content",
    }}>
        <LandingPart />
        <MainPageCatalogue />
        <Footer />
    </Box>
  )
}

export default MainPage