import React, { useState } from 'react'
import Header from '../MainPage/Header/Header'
import { Box, Button, Grid } from '@mui/material';
import PageTitle from '../MensWatchPage/PageTitle';
import Footer from '../MainPage/Footer/Footer';
import LoginTextField from '../LoginPage/LoginTextField';
import NavBar from '../NavBar/NavBar';

function CheckoutPage() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [cardNumber, setCardNumber] = useState('');

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [adress, setAdress] = React.useState('');
    const [endDate, setEndDate] = React.useState('');
    const [cvv, setCVV] = React.useState('');
    const handleName = (val) => {
        setName(val)
    }
    const handleEmail = (val) => {
        setEmail(val)
    }
    const handlePhoneNumber = (val) => {
        setPhoneNumber(val)
    }
    const handleAdress = (val) => {
        setAdress(val)
    }
    const handleEndDate = (val) => {
        setEndDate(val)
    }
    const handleCVV = (val) => {
        setCVV(val)
    }
    const handleChange = (value) => {
        //const { value } = event.target;
        const formattedValue = value
        .replace(/\s/g, '') 
        .replace(/(\d{4})(?=\d)/g, '$1 '); 

        setCardNumber(formattedValue);
    }
    const handleClick = (e) => {
        // buy 
        e.preventDefault()
        const url = "http://localhost:8888/checkout/buy";
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                username: name,
                email:email,
                phoneNumber:phoneNumber,
                adress:adress,
                cardNumber:cardNumber,
                endDate:endDate,
                cvv:cvv,
                items:JSON.parse(localStorage.getItem('cart')).bucket
            })
        }).then(res => {
            return res.json()
        }).then(data => {
          console.log(data)
      })
            .catch(error => console.log('error'))
    }

  return (
    <Box sx={{
        backgroundColor: "#171A25",
        minHeight: "103vh",
        height: "fit-content",
    }}>
        <Header handleMenu={() => setIsMenuOpen(true)} />
        <NavBar menuOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
        <PageTitle title="Оформлення замовлення" />
        <LoginTextField title="ПІБ" type="text" onChange={handleName}/>
        <LoginTextField title="E-mail" type="text" onChange={handleEmail}/>
        <LoginTextField title="Номер телефону" type="text" onChange={handlePhoneNumber}/>
        {/* <LoginTextField title="Населений пункт" type="text" /> */}
        <LoginTextField title="Адреса" type="text" onChange={handleAdress}/>
        <LoginTextField title="Номер картки" type="text" value={cardNumber} onChange={handleChange} />
        <LoginTextField title="Дата закінчення" type="data" onChange={handleEndDate}/>
        <LoginTextField title="CVV" type="password" onChange={handleCVV}/>
        <Grid container justifyContent="center">
            <Button onClick={handleClick} variant='outlined' sx={{
                color: "white",
                borderColor: "white",
                fontFamily: "Montserrat",
                fontSize: '24px',
                fontWeight: "600px",
                textTransform: 'none',
                lineHeight: '29px',
                width: '450px',
                height: '70px',
                borderRadius: '40px',
                "&:hover": {
                    backgroundColor: "white",
                    color: 'black',
                },
            }}>Підтвердити замовлення</Button>
        </Grid>
        <Footer />
    </Box>
  )
}

export default CheckoutPage