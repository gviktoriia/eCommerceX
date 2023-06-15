import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { profile_route } from '../../Routing/Routes'
import PersonIcon from '@mui/icons-material/Person';


function ProfileIcon() {
  return (
    <Box>
      <Link to={profile_route}>
        <PersonIcon style={{ color: 'white', width: '36px', height: '36px', }} />
      </Link>
    </Box>
  )
}

export default ProfileIcon