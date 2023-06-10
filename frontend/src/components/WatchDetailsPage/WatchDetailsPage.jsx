import { Box } from '@mui/material'
import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../MainPage/Header/Header'
import WatchInfo from './WatchInfo'
import Footer from '../MainPage/Footer/Footer'
import NavBar from '../NavBar/NavBar'

function WatchDetailsPage() {
  const {id} = useParams()

  const [watches, setWatches] = useState([{}])

  useEffect(() => {
    fetch(`/api/watches/${id}`).then(
      response => response.json()
    ).then(
      data => {
        setWatches(data)
      }
    )
  }, [])

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Box sx={{
        backgroundColor: "#171A25",
        minHeight: "103vh",
        height: "fit-content",
    }}>
        <Header handleMenu={() => setIsMenuOpen(true)} />
        <NavBar menuOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
        <WatchInfo 
            id={id}
            image={watches.image}
            title={watches.name}
            price={watches.price/100} 
            brand={watches.manufacturer} 
            gender={watches.sex} 
            material={watches.material} 
            style={watches.style} 
            quantity={watches.quantity}
            description={watches.description} />
        <Footer />    
    </Box>
  )
}

export default WatchDetailsPage