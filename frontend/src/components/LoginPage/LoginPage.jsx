import { Box } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom";
import Header from '../MainPage/Header/Header'
import LoginText from './LoginText'
import LoginTextField from './LoginTextField'
import LoginActionBtn from './LoginActionBtn'
import SignupInvite from './SignupInvite'
import Footer from '../MainPage/Footer/Footer'
import { home_route, signup_route } from '../Routing/Routes'
import { profile_route } from '../Routing/Routes'
import NavBar from '../NavBar/NavBar'

function LoginPage() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleLogin = (newLogin) => {
    setLogin(newLogin)
  }
  const handlePassword = (newPassword) => {
    setPassword(newPassword)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const url = "http://localhost:8888/auth/login";
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: login,
            password: password
        })
    }).then(res => {
        return res.json()
    }).then(data => {
      localStorage.setItem('token',data.token)
      if(data.token) navigate(home_route)
  })
        .catch(error => console.log('error'))
  }
  return (
    <Box sx={{
        backgroundColor: "#171A25",
        minHeight: "103vh",
        maxHeight: "fit-content",
    }}>
        <Header handleMenu={() => setIsMenuOpen(true)} />
        <NavBar menuOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
        <LoginText title="Вхід" />
        <LoginTextField title="Логін" type="email" onChange={handleLogin}/>
        <LoginTextField title="Пароль" type="password" onChange={handlePassword} />
        <LoginActionBtn handleClick={handleSubmit}/>
        <SignupInvite invite="Ще нема акаунта?" link="Зареєструватися" to={signup_route}/>
        <Footer />
    </Box>
  )
}

export default LoginPage