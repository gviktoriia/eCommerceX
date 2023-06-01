import { Box } from '@mui/material'
import React from 'react'
import Header from '../MainPage/Header/Header'
import PageTitle from './PageTitle'
import MensWatchCatalogue from './MensWatchCatalogue'
import Footer from '../MainPage/Footer/Footer'
import NavBar from '../NavBar/NavBar'

function MensWatchPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Box sx={{
            backgroundColor: "#171A25",
            height: "fit-content",
        }}>
        <Header handleMenu={() => setIsMenuOpen(true)} />
        <NavBar menuOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
        <PageTitle title="Чоловічі годинники" imageUrl="https://images.unsplash.com/photo-1623998021446-45cd9b269056?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1779&q=80" />
        <MensWatchCatalogue />
        <Footer />        
    </Box>
  )
}

export default MensWatchPage