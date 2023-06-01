import { Drawer, List, ListItem } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { home_route, men_route, smart_route, women_route } from '../Routing/Routes';

function NavBar(props) {

    const menuItems = [
        { address: home_route, label: "WATCH" },
        { address: men_route, label: "Чоловічі" },
        { address: women_route, label: "Жіночі" },
        { address: smart_route, label: "Смарт-годинники" },
      ];
    
      const { menuOpen, closeMenu = Function.prototype } = props;

  return (
    <Drawer
      anchor="left"
      open={menuOpen}
      onClose={closeMenu}
      PaperProps={{
        sx: {
          backgroundColor: "#171A25",
        },
      }}
    >
      <List
        sx={{
          width: "250px",
        }}
      >
        {menuItems.map((item, index) => (
          <ListItem key={index}>
            <div >
              <NavLink style={{color: 'white', textDecoration: 'none'}}
                to={item.address}>
                {item.label}
              </NavLink>
            </div>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default NavBar