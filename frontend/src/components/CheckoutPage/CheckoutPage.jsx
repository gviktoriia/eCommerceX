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

    const handleChange = (event) => {
        const { value } = event.target;
        const formattedValue = value
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
        <PageTitle title="Оформлення замовлення" />
        <LoginTextField title="ПІБ" type="text" />
        <LoginTextField title="E-mail/Номер телефону" type="text" />
        <LoginTextField title="Населений пункт" type="text" />
        <LoginTextField title="Адреса" type="text" />
        <LoginTextField title="Номер картки" type="text" value={cardNumber} onChange={handleChange} />
        <LoginTextField title="Дата закінчення" type="data" />
        <LoginTextField title="CVV" type="password" />
        <Grid container justifyContent="center">
            <Button variant='outlined' sx={{
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