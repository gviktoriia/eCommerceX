import { Box, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import ToCartBtn from './ToCartBtn'

function WatchInfo(props) {
  return (
    <Grid container paddingTop={{ xs: '20px', sm: '30px', md: '44px' }} justifyContent='center' margin='0'  >
        <Grid item>
            <Grid container direction='row'>
                <Grid item>
                    <Box height={{ xs: '200px', sm: '300px', md: '390px' }}
                        width={{ xs: '300px', sm: '400px', md: '550px' }}>
                        <CardMedia
                                    component="img"
                                    alt="Watch item"
                                    height="100%"
                                    width="100%"
                                    image={props.image} />
                    </Box>
                </Grid>
                <Grid item>
                    <Grid container direction='column' paddingLeft={{ xs: '20px', md: '50px' }} >
                        <Grid item>
                            <Typography sx={{
                                color: 'white',
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                fontSize: { xs: '20px', sm: '24px', md: '26px' },
                                lineHeight: '24px',
                            }}>{props.title}</Typography>
                        </Grid>
                        <Grid item paddingTop={{ xs: '12px', sm: '16px', md: '20px' }}>
                            <Typography sx={{
                                color: 'white',
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: { xs: '18px', sm: '20px', md: '24px' },
                                lineHeight: '29px',
                            }}>{props.price} грн</Typography>
                        </Grid>
                        <Grid item paddingTop={{ xs: '20px', sm: '30px', md: '40px' }}>
                            <Typography sx={{
                                color: 'white',
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: { xs: '16px', sm: '18px', md: '22px' },
                                lineHeight: '27px',
                            }}>Бренд: {props.brand}</Typography>
                        </Grid>
                        <Grid item paddingTop={{ xs: '10px', sm: '12px', md: '16px' }}>
                            <Typography sx={{
                                color: 'white',
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: { xs: '16px', sm: '18px', md: '22px' },
                                lineHeight: '27px',
                            }}>Стать: {props.gender}</Typography>
                        </Grid>
                        <Grid item paddingTop={{ xs: '10px', sm: '12px', md: '16px' }}>
                            <Typography sx={{
                                color: 'white',
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: { xs: '16px', sm: '18px', md: '22px' },
                                lineHeight: '27px',
                            }}>Матеріал корпусу: {props.material}</Typography>
                        </Grid>
                        <Grid item paddingTop={{ xs: '10px', sm: '12px', md: '16px' }}>
                            <Typography sx={{
                                color: 'white',
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: { xs: '16px', sm: '18px', md: '22px' },
                                lineHeight: '27px',
                            }}>Стиль: {props.style}</Typography>
                        </Grid>
                        <Grid item paddingTop={{ xs: '10px', sm: '12px', md: '16px' }}>
                            <Typography sx={{
                                color: 'white',
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: { xs: '16px', sm: '18px', md: '22px' },
                                lineHeight: '27px',
                            }}>Кількість: {props.quantity}</Typography>
                        </Grid>
                        <Grid item>
                            <ToCartBtn />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item paddingTop={{ xs: '40px', sm: '50px', md: '70px' }} maxWidth="1130px">
            <Typography sx={{
                color: 'white',
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: { xs: '18px', sm: '20px', md: '22px' },
                lineHeight: '27px',
                textAlign: 'center',
            }}>{props.description}</Typography>
        </Grid>
    </Grid>
  )
}

export default WatchInfo