import { Box } from '@mui/material'
import React from 'react'
import Header from '../MainPage/Header/Header'
import Footer from '../MainPage/Footer/Footer'
import EditWatchInfo from './EditWatchInfo'
import NavBar from '../NavBar/NavBar'

function AdminWatchDetailsPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Box sx={{
      backgroundColor: "#171A25",
      minHeight: "103vh",
      height: "fit-content",
  }}>
      <Header handleMenu={() => setIsMenuOpen(true)} />
      <NavBar menuOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
      <EditWatchInfo image="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          title="Fossil Leather Watch" price="6873" brand="Fossil" gender="Чоловічі" material="Сталь" style="Повсякденні"
          description="Чудовий чоловічий годинник Fossil FS5608 являє собою ідеальне поєднання модного стилю і якісної надійності. Корпус із нержавіючої сталі з чорним покриттям має діаметр 46 мм. 
          Захисне мінеральне скло та арабські цифри й індекси додають елегантності дизайну. Аналогова індикація з кварцовим механізмом гарантує надійність ходу. Водонепроникність 50 WR дозволяє носити годинник у вологому середовищі. 
          Браслет зі шкіри додає комфорту та унікальності вашому образу. Гарантія 24 місяці надає вам додаткову впевненість у якості та довговічності годинника." />
      <Footer />    
  </Box>
  )
}

export default AdminWatchDetailsPage