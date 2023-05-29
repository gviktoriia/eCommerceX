import { Drawer, List, ListItem, ListItemIcon } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar(props) {

    const menuItems = [
        { icon: null, label: "Фільми" },
        { icon: null, label: "Серіали" },
        { icon: null, label: "Новинки" },
      ];
    
      const { menuOpen, closeMenu = Function.prototype } = props;

  return (
    <Drawer
      anchor="left"
      open={menuOpen}
      onClose={closeMenu}
      PaperProps={{
        sx: {
          backgroundColor: "black",
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
            <ListItemIcon>{item.icon}</ListItemIcon>
            <div >
              <NavLink
                to={"/" + item.label.toLowerCase()}>
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