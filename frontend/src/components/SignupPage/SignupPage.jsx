import { Box } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom";
import Header from '../MainPage/Header/Header'
import LoginText from '../LoginPage/LoginText'
import LoginTextField from '../LoginPage/LoginTextField'
import SignupInvite from '../LoginPage/SignupInvite'
import Footer from '../MainPage/Footer/Footer'
import { login_route } from '../Routing/Routes'
import { profile_route } from '../Routing/Routes'
import SignupActionBtn from './SignupActionBtn'
import NavBar from '../NavBar/NavBar'

function SignupPage() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [name, setName] = React.useState('');
  // const [email, setEmail] = React.useState('');
  // const [phoneNumber, setPhoneNumber] = React.useState('');
  const [emailOrPhoneNumber, setEmailOrPhoneNumber] = React.useState('');
  const [password1, setPassword1] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const handleName = (name) => {
    setName(name)
  }
  const handleEmailOrPhoneNumber = (text) => {
    setEmailOrPhoneNumber(text)
  }
  const handlePassword1 = (newPassword) => {
    setPassword1(newPassword)
  }
  const handlePassword2 = (newPassword) => {
    setPassword2(newPassword)
  }
  const handleSubmit = (e) => {
    if (password1 !== password2) {
      alert('Паролі не співпадають')
      return
    }
    var body
    // needs additional control
    if (emailOrPhoneNumber.indexOf('@') > -1)
      body = {
        username: name,
        email: emailOrPhoneNumber,
        password: password1
      }
    else if (emailOrPhoneNumber)
      body = {
        username: name,
        phoneNumber: emailOrPhoneNumber,
        password: password1
      }
    else {
      alert('Заповніть з поштою/номером телефону')
      return
    }

    e.preventDefault()
    const url = "http://localhost:8888/auth/registration";
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => {
      return res.json()
    }).then(data => {
      fetch('http://localhost:8888/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: name,
          password: password1
        })
      }).then(res => {
        return res.json()
      }).then(data => {
        localStorage.setItem('token', data.token)
        if (data.token) navigate(profile_route)
      })
        .catch(error => console.log('error'))
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
      <LoginText title="Реєстрація" />
      <LoginTextField title="ПІБ" type="text" onChange={handleName} />
      <LoginTextField title="E-mail/Номер телефону" type="text" onChange={handleEmailOrPhoneNumber} />
      <LoginTextField title="Пароль" type="password" onChange={handlePassword1} />
      <LoginTextField title="Підтвердіть пароль" type="password" onChange={handlePassword2} />
      <SignupActionBtn handleClick={handleSubmit} />
      <SignupInvite invite="Уже зареєстровані?" link="Увійти" to={login_route} />
      <Footer />
    </Box>
  )
}

export default SignupPage