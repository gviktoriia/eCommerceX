import React, { useEffect, useState } from 'react'
import Header from '../MainPage/Header/Header'
import { Box, Button, Grid } from '@mui/material'
import PageTitle from '../MensWatchPage/PageTitle'
import Footer from '../MainPage/Footer/Footer'
import LoginTextField from '../LoginPage/LoginTextField'
import NavBar from '../NavBar/NavBar'

function ProfilePage() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [cardNumber, setCardNumber] = useState('');

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [adress, setAdress] = React.useState('');
    const handleName = (name) => {
        setName(name)
    }
    const handleEmail = (name) => {
        setEmail(name)
    }
    const handlePhoneNUmber = (name) => {
        setPhoneNumber(name)
    }
    const handleAdress = (name) => {
        setPhoneNumber(name)
    }

    const handleChange = (event) => {
        //const { value } = event.target;
        const formattedValue = event
            .replace(/\s/g, '')
            .replace(/(\d{4})(?=\d)/g, '$1 ');

        setCardNumber(formattedValue);
    };

    return (
        <Box sx={{
            backgroundColor: "#171A25",
            minHeight: "103vh",
            height: "fit-content",
        }}>
            <Header handleMenu={() => setIsMenuOpen(true)} />
            <NavBar menuOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
            <PageTitle title="Профіль" />
            <LoginTextField title="ПІБ" type="text" onChange={handleName} />
            <LoginTextField title="E-mail" type="text" onChange={handleEmail} />
            <LoginTextField title="Номер телефону" type="text" onChange={handlePhoneNUmber} />
            {/* <LoginTextField title="Населений пункт" type="text" onChange={}/> */}
            <LoginTextField title="Адреса" type="text" onChange={handleAdress} />
            <LoginTextField title="Номер картки" type="text"
                value={cardNumber} onChange={handleChange} />
            <Grid container justifyContent='center'>
                <Button variant='outlined' sx={{
                    color: "white",
                    borderColor: "white",
                    fontFamily: "Montserrat",
                    fontSize: '22px',
                    fontWeight: "500px",
                    textTransform: 'none',
                    width: '250px',
                    height: '70px',
                    borderRadius: '40px',
                    marginTop: '20px',
                    "&:hover": {
                        backgroundColor: "white",
                        color: 'black',
                    },
                }}>Зберегти</Button>
            </Grid>
            <Footer />
        </Box>
    )
}

export default ProfilePage