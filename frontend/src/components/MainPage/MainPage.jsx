
import LandingPart from './Landing/LandingPart'
import MainPageCatalogue from './MainCatalogue/MainPageCatalogue'
import Footer from './Footer/Footer'
import { Box } from '@mui/material'
import React, {useEffect, useState } from 'react'

// const adminMode = createContext()

function MainPage() {

  // const [role, setRole] = useState('')

  // useEffect(() => {
  //   const url = "http://localhost:8888/auth/user";
  //       fetch(url, {
  //           method: 'POST',
  //           headers: {
  //               Authorization: `Bearer ${localStorage.getItem('token')}`
  //           }
  //       }).then(res => {
  //           return res.json()
  //       }).then(data => {
  //          console.log(data)
  //          if(data.roles.indexOf('ADMIN') > -1){
  //           setRole('ADMIN')
  //          } else {
  //           setRole('USER')
  //          }
  //       })
  //           .catch(error => console.log('error'))
  // }, [])
  // console.log(role)
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