import { Box } from '@mui/material'
import React from 'react'
import Header from '../MainPage/Header/Header'
import LoginText from '../LoginPage/LoginText'
import LoginTextField from '../LoginPage/LoginTextField'
import SignupInvite from '../LoginPage/SignupInvite'
import Footer from '../MainPage/Footer/Footer'
import { login_route } from '../Routing/Routes'
import SignupActionBtn from './SignupActionBtn'
import NavBar from '../NavBar/NavBar'

function SignupPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Box sx={{
        backgroundColor: "#171A25",
        minHeight: "103vh",
        maxHeight: "fit-content",
    }}>
        <Header handleMenu={() => setIsMenuOpen(true)} />
        <NavBar menuOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
        <LoginText title="Реєстрація"/>
        <LoginTextField title="ПІБ" type="text" />
        <LoginTextField title="E-mail/Номер телефону" type="text" />
        <LoginTextField title="Пароль" type="password" />
        <LoginTextField title="Підтвердіть пароль" type="password" />
        <SignupActionBtn />
        <SignupInvite invite="Уже зареєстровані?" link="Увійти" to={login_route} />
        <Footer />
    </Box>
  )
}

export default SignupPage