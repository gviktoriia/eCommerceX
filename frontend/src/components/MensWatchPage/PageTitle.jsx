import { Box, Typography } from '@mui/material'
import React from 'react'

function PageTitle(props) {
  return (
    <Box sx={{
        position: 'relative',
        height: '140px',
    }}>
        <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '140px',
            backgroundImage: `url(${props.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: "20%",
        }}>
        </Box>
        <Typography sx={{
            position: 'relative',
            color: "white",
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "40px",
            lineHeight: "49px",
            textAlign: 'center',
            paddingTop: '46px',
            zIndex: 1,
        }}>{props.title}</Typography>
    </Box>
  )
}

export default PageTitle