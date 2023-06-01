import React from 'react'
import Header from '../Header/Header'
import { Box } from '@mui/material'
import MainText from './MainText';

function LandingPart() {
    const backgroundImageUrl = 'url(https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)';
  return (
    <Box sx={{
        height: '105vh',
        backgroundImage: backgroundImageUrl,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <Header />
        <MainText />
    </Box>
  )
}

export default LandingPart