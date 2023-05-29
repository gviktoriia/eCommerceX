import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { details_route } from '../../Routing/Routes'

function ItemCard(props) {
  return (
    <Link to={details_route} style={{ textDecoration: 'none', color: 'white' }}>
        <Card sx={{ maxWidth: 345, borderRadius:"10px",
                    "&:hover": {
                        opacity: "50%",
                    } }}>
                <CardMedia
                    component="img"
                    alt="Watch item"
                    height="380px"
                    width="350px"
                    image={props.image} />
                <CardContent sx={{backgroundColor: "#393939",}}>
                    <Typography gutterBottom paddingTop="16px" paddingBottom="0px" margin="0px" sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: "24px",
                        lineHeight: "29px",
                        color: "white",
                    }}>
                        {props.title}
                    </Typography>
                </CardContent>
                  <CardActions sx={{ backgroundColor: "#393939", }}>
                  <Grid container direction="row" columnSpacing={3} textAlign="center" margin="0" paddingTop="0px" paddingBottom="28px">
                  <Grid item >
                        <Typography sx={{
                            color: "white",
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 200,
                            fontSize: "22px",
                        }}>
                            {props.price} грн
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant='outlined'
                            sx={{
                                color: "white",
                                borderColor: "White",
                                fontFamily: "Montserrat",
                                fontSize: '22px',
                                fontWeight: "500px",
                                textTransform: 'none',
                                width: '110px',
                                height: '30px',
                                borderRadius: '40px',
                                "&:hover": {
                                    backgroundColor: "white",
                                    color: 'black',
                                },
                            }}>Купити</Button>
                    </Grid>
                    </Grid>
                  </CardActions>
        </Card>
    </Link>
  )
}

export default ItemCard