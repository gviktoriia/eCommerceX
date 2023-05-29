import { Box, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Box sx={{
        backgroundColor: "#171A25",
        height: "fit-content",
    }}>
        <Typography sx={{
            color: "white",
            fontFamily: 'Montserrat',
            fontStyle: "normal",
            fontWeight: 200,
            fontSize: "20px",
            lineHeight: "24px",
            paddingTop: "100px",
            paddingBottom: "20px",
            textAlign: "center",
        }}>Created by eCommerceX group</Typography>
        <Typography sx={{
            color: "white",
            fontFamily: 'Montserrat',
            fontStyle: "normal",
            fontWeight: 200,
            fontSize: "16px",
            lineHeight: "20px",
            paddingBottom: "50px",
            textAlign: "center",
        }}>Ⓒ Copyright 2023. All rights reserved.</Typography>
    </Box>
  )
}

export default Footer