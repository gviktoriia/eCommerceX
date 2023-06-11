import { Box } from '@mui/material'
import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../MainPage/Header/Header'
import Footer from '../MainPage/Footer/Footer'
import EditWatchInfo from './EditWatchInfo'
import NavBar from '../NavBar/NavBar'

function AdminWatchDetailsPage() {
  const { id } = useParams()

  const [watch, setWatch] = useState({})

  useEffect(() => {
    fetch(`/api/watches/${id}`).then(
      response => response.json()
    ).then(
      data => {
        setWatch(data)
        console.log(data)
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
      <EditWatchInfo
        id={id}
        image={watch.image}
        title={watch.name}
        price={watch.price / 100}
        brand={watch.manufacturer}
        gender={watch.sex}
        material={watch.material}
        style={watch.style}
        quantity={watch.quantity}
        description={watch.description}
         />
      <Footer />
    </Box>
  )
}

export default AdminWatchDetailsPage