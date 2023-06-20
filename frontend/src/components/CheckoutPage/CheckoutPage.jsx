import React, { useState, useEffect } from 'react'
import Header from '../MainPage/Header/Header'
import { Box, Button, Grid, Typography } from '@mui/material';
import PageTitle from '../MensWatchPage/PageTitle';
import Footer from '../MainPage/Footer/Footer';
import LoginTextField from '../LoginPage/LoginTextField';
import NavBar from '../NavBar/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import { home_route } from '../Routing/Routes';

function CheckoutPage() {
    //const [logined, setLogined] = useState(false)
    useEffect(() => {
        const url = "http://localhost:8888/auth/user";
            fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                return res.json()
            }).then(data => {
               if(data.roles.indexOf('ADMIN') > -1 || data.roles.indexOf('USER') > -1){
                    console.log(data)
                    setName(data.username)
                    setEmail(data.email || '')
                    setPhoneNumber(data.phoneNumber || '')
                    setAddress(data.adress || '')
                    setCardNumber(data.cardNumber || '')
                    console.log(data.cardNumber)
               } 
            })
                .catch(error => console.log('not registered'))
      }, [])
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [cardNumberError, setCardNumberError] = useState('');

    const [name, setName] = React.useState('');
    const [nameError, setNameError] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [phoneNumberError, setPhoneNumberError] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [addressError, setAddressError] = React.useState('');
    const [endDate, setEndDate] = React.useState('');
    const [endDateError, setEndDateError] = React.useState('');
    const [cvv, setCVV] = React.useState('');
    const [cvvError, setCVVError] = React.useState('');

    const handleName = (val) => {
        setName(val)
    }
    const handleEmail = (val) => {
        setEmail(val)
        if (!validateEmail(val)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    }
    const handlePhoneNumber = (val) => {
        setPhoneNumber(val)
        if (!validatePhoneNumber(val)) {
            setPhoneNumberError('Будь ласка, введіть коректний номер');
        } else {
            setPhoneNumberError('');
        }
    }
    const handleAddress = (val) => {
        setAddress(val)
    }
    const handleEndDate = (val) => {
        setEndDate(val)
        if (!validateEndDate(val)) {
            setEndDateError('Ваша картка не дійсна');
        } else {
            setEndDateError('');
        }
    }
    const handleCVV = (val) => {
        setCVV(val)
    }
    const handleChange = (val) => {
        setCardNumber(val);
        if (!validateCardNumber(val)) {
            setCardNumberError('Please enter a valid 16-digit card number');
        } else {
            setCardNumberError('');
        }
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberRegex = /^\+380\d{9}$/;
        return phoneNumberRegex.test(phoneNumber);
      };

    const validateCardNumber = (cardNumber) => {
        const cardNumberRegex = /^\d{16}$/;
        return cardNumberRegex.test(cardNumber);
    }
      
    const validateEndDate = (endDate) => {
        const selectedDate = new Date(endDate);
        const today = new Date();
        return selectedDate > today;
    };

    const navigate = useNavigate();

    const handleClick = (e) => {
        // buy 
        e.preventDefault()
        let hasError = false;
        if (name.trim() === '') {
            setNameError('Введіть ваш ПІБ');
            hasError = true;
          } else {
            setNameError('');
          }
        
          if (email.trim() === '') {
            setEmailError('Введіть email');
            hasError = true;
          } else if (!validateEmail(email)) {
            setEmailError('Введіть коректний email');
            hasError = true;
        }
           else {
            setEmailError('');
          }
        
          if (phoneNumber.trim() === '') {
            setPhoneNumberError('Введіть номер телефону');
            hasError = true;
          } else if (!validatePhoneNumber(phoneNumber)) {
            setPhoneNumberError('Будь ласка, введіть коректний номер');
            hasError = true;
          } else {
            setPhoneNumberError('');
          }
        
          if (address.trim() === '') {
            setAddressError('Введіть адресу доставки');
            hasError = true;
          } else {
            setAddressError('');
          }
        
          if (cardNumber.trim() === '') {
            setCardNumberError('Введіть номер картки');
            hasError = true;
          } else if (!validateCardNumber(cardNumber)) {
            setCardNumberError('Введіть коректний номер картки');
            hasError = true;
          } else {
            setCardNumberError('');
          }
        
          if (endDate.trim() === '') {
            setEndDateError('Введіть дату закінчення картки');
            hasError = true;
          } else if (!validateEndDate(endDate)) {
            setEndDateError('Ваша картка не дійсна');
            hasError = true;
          } else {
            setEndDateError('');
          }
        
          if (cvv.trim() === '') {
            setCVVError('Введіть CVV');
            hasError = true;
          } else {
            setCVVError('');
          }
        
          if (hasError) {
            return;
          }
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
                adress:address,
                cardNumber:cardNumber,
                endDate:endDate,
                cvv:cvv,
                items:JSON.parse(localStorage.getItem('cart')).bucket
            })
        }).then(res => {
            return res.json()
        }).then(data => {
          console.log(data)
          navigate(home_route);
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
        {nameError && <Typography sx={{textAlign: 'center', color: 'red' }}>{nameError}</Typography>}
        <LoginTextField title="ПІБ" type="text" value={name} onChange={handleName} error={nameError} />
        {emailError && <Typography sx={{textAlign: 'center', color: 'red' }}>{emailError}</Typography>}
        <LoginTextField title="E-mail" type="text" value={email} onChange={handleEmail} error={emailError} />
        {phoneNumberError && <Typography sx={{textAlign: 'center', color: 'red' }}>{phoneNumberError}</Typography>}
        <LoginTextField title="Номер телефону" type="text" value={phoneNumber} onChange={handlePhoneNumber} error={phoneNumberError} />
        {addressError && <Typography sx={{textAlign: 'center', color: 'red' }}>{addressError}</Typography>}
        <LoginTextField title="Адреса" type="text" value={address} onChange={handleAddress} error={addressError} />
        {cardNumberError && <Typography sx={{textAlign: 'center', color: 'red' }}>{cardNumberError}</Typography>}
        <LoginTextField title="Номер картки" type="text" value={cardNumber} onChange={handleChange} error={cardNumberError} />
        {endDateError && <Typography sx={{textAlign: 'center', color: 'red' }}>{endDateError}</Typography>}
        <LoginTextField title="Дата закінчення" type="date" onChange={handleEndDate} error={endDateError} />
        {cvvError && <Typography sx={{textAlign: 'center', color: 'red' }}>{cvvError}</Typography>}
        <LoginTextField title="CVV" type="password" onChange={handleCVV} error={cvvError} />
        <Grid container justifyContent="center">
            <Link to={home_route} >
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
            </Link>
        </Grid>
        <Footer />
    </Box>
  )
}

export default CheckoutPage