import { Box } from '@mui/material'
import React, {useState} from 'react'
import Header from '../MainPage/Header/Header'
import PageTitle from '../MensWatchPage/PageTitle'
import Footer from '../MainPage/Footer/Footer'
import WomensWatchCatalogue from './WomensWatchCatalogue'
import NavBar from '../NavBar/NavBar'
import { SearchBarContext } from '../MainPage/Header/SearchBarContext'

function WomensWatchPage() {

  const [search, setSearch] = useState('');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <SearchBarContext.Provider value={{ search, setSearch }}>
    <Box sx={{
        backgroundColor: "#171A25",
        height: "fit-content",
    }}>
        <Header handleMenu={() => setIsMenuOpen(true)} />
        <NavBar menuOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
        <PageTitle title="Жіночі годинники" imageUrl="https://images.unsplash.com/photo-1490915785914-0af2806c22b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
        <WomensWatchCatalogue />
        <Footer />        
    </Box>
    </SearchBarContext.Provider>
  )
}

export default WomensWatchPage