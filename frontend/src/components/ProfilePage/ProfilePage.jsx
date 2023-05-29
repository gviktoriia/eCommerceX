import React from 'react'
import Header from '../MainPage/Header/Header'
import { Box } from '@mui/material'
import PageTitle from '../MensWatchPage/PageTitle'
import Footer from '../MainPage/Footer/Footer'

function ProfilePage() {
  return (
    <Box sx={{
        backgroundColor: "#171A25",
        minHeight: "103vh",
        height: "fit-content",
    }}>
        <Header />
        <PageTitle title="Ім'я користувача" />
        
        <Footer />
    </Box>
  )
}

export default ProfilePage