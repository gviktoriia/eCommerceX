import { Box } from '@mui/material'
import React from 'react'
import Header from '../MainPage/Header/Header'
import Footer from '../MainPage/Footer/Footer'
import PageTitle from '../MensWatchPage/PageTitle'
import SmartWatchCatalogue from './SmartWatchCatalogue'

function SmartWatchPage() {
  return (
    <Box sx={{
        backgroundColor: "#171A25",
        height: "fit-content",
    }}>
        <Header />
        <PageTitle title="Смарт-годинники" imageUrl="https://images.unsplash.com/photo-1486746290722-483e8f1e44d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=697&q=80" />
        <SmartWatchCatalogue />
        <Footer />        
    </Box>
  )
}

export default SmartWatchPage