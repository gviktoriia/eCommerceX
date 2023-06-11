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
  const [adminMode, setAdminMode] = useState(false)

  useEffect(() => {
    fetch(`/api/watches/${id}`).then(
      response => response.json()
    ).then(
      data => {
        setWatch(data)
        //console.log(data)
      }
    )
    const url = "http://localhost:8888/auth/user";
      fetch(url, {
          method: 'GET',
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
          }
      }).then(res => {
          return res.json()
      }).then(data => {
          if (data.roles.indexOf('ADMIN') > -1) {
              setAdminMode(true)
          } else {
              setAdminMode(false)
          }
      })
          .catch(error => console.log('error'))
  }, [])

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  if (!adminMode) return null
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