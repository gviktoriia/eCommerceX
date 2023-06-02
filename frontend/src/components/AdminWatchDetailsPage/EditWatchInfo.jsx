import { Box, CardMedia, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import SaveEditionBtn from './SaveEditionBtn'
import AddItemPhoto from '../MainPage/MainCatalogue/AddItemPhoto';
import FileUpload from '../MainPage/MainCatalogue/FileUpload';

function EditWatchInfo(props) {
    const [name, setName] = React.useState(props.title);
    const [isNameFocused, setIsNameFocused] = React.useState(false);

    const [price, setPrice] = React.useState(props.price);
    const [isPriceFocused, setIsPriceFocused] = React.useState(false);

    const [brand, setBrand] = React.useState(props.brand);
    const [isBrandFocused, setIsBrandFocused] = React.useState(false);

    const [gender, setGender] = React.useState(props.gender);
    const [isGenderFocused, setIsGenderFocused] = React.useState(false);

    const [material, setMaterial] = React.useState(props.material);
    const [isMaterialFocused, setIsMaterialFocused] = React.useState(false);

    const [style, setStyle] = React.useState(props.style);
    const [isStyleFocused, setIsStyleFocused] = React.useState(false);

    const [quantity, setQuantity] = React.useState(props.quantity);
    const [isQuantityFocused, setIsQuantityFocused] = React.useState(false);

    const [description, setDescription] = React.useState(props.description);
    const [isDescriptionFocused, setIsDescriptionFocused] = React.useState(false);

  return (
    <Grid container paddingTop={{ xs: '20px', sm: '30px', md: '44px' }} justifyContent='center' margin='0'  >
        <Grid item>
            <Grid container direction='row' justifyContent={{ xs: 'center' }}>
                <Grid item>
                    <Box height={{ xs: '350px', sm: '300px', md: '390px' }}
                        width={{ xs: '350px', sm: '300px', md: '550px' }}>
                        <CardMedia
                                    component="img"
                                    alt="Watch item"
                                    height="100%"
                                    width="100%"
                                    image={props.image} />
                    </Box>
                </Grid>
                <Grid item>
                    <Grid container direction='column' paddingLeft={{ sm: '20px', md: '50px' }} paddingTop={{ xs: "20px" }} alignItems={{ xs: 'center', sm: 'flex-start' }} >
                        <Grid item>
                            {!isNameFocused ? 
                                (<Typography onClick={() => {setIsNameFocused(true)}} 
                                sx={{
                                    color: 'white',
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    fontSize: { xs: '20px', sm: '24px', md: '26px' },
                                    lineHeight: '24px',
                            }}>{name}</Typography>) : 
                            (<TextField autoFocus sx={{
                                color: 'white',
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                fontSize: { xs: '20px', sm: '24px', md: '26px' },
                                lineHeight: '1.6', 
                                '& .MuiInputBase-root': {
                                  '& input': {
                                    color: 'white', 
                                    padding: '8px 0', 
                                  },
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'white',
                                },
                                '& .MuiInputBase-input': {
                                  caretColor: 'white',
                                },
                              }}
                            value={name}
                            onChange={event => setName(event.target.value)}
                            onBlur={event => setIsNameFocused(false)}>
                            </TextField>)}
                        </Grid>
                        <Grid item paddingTop={{ xs: '12px', sm: '16px', md: '20px' }}>
                            {!isPriceFocused ? (<Typography onClick={() => {setIsPriceFocused(true)}}
                            sx={{
                                color: 'white',
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: { xs: '18px', sm: '20px', md: '24px' },
                                lineHeight: '29px',
                            }}>{price} грн</Typography>) : 
                            (<TextField autoFocus
                            sx={{
                                color: 'white',
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: { xs: '18px', sm: '20px', md: '24px' },
                                lineHeight: '1.6', 
                                '& .MuiInputBase-root': {
                                  '& input': {
                                    color: 'white', 
                                    padding: '8px 0', 
                                  },
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'white',
                                },
                                '& .MuiInputBase-input': {
                                  caretColor: 'white',
                                },
                              }}
                            value={price}
                            onChange={event => setPrice(event.target.value)}
                            onBlur={event => setIsPriceFocused(false)}>
                            </TextField>)}
                        </Grid>
                        <Grid item paddingTop={{ xs: '20px', sm: '30px', md: '40px' }}>
                            {!isBrandFocused ? (<Typography onClick={() => {setIsBrandFocused(true)}}
                            sx={{
                                color: 'white',
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: { xs: '16px', sm: '18px', md: '22px' },
                                lineHeight: '27px',
                            }}>Бренд: {brand}</Typography>) : 
                            (<TextField autoFocus
                                sx={{
                                    color: 'white',
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: { xs: '18px', sm: '20px', md: '24px' },
                                    lineHeight: '1.6', 
                                    '& .MuiInputBase-root': {
                                      '& input': {
                                        color: 'white', 
                                        padding: '8px 0', 
                                      },
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                      borderColor: 'white',
                                    },
                                    '& .MuiInputBase-input': {
                                      caretColor: 'white',
                                    },
                                  }}
                                value={brand}
                                onChange={event => setBrand(event.target.value)}
                                onBlur={event => setIsBrandFocused(false)}>
                                </TextField>)}
                        </Grid>
                        <Grid item paddingTop={{ xs: '10px', sm: '12px', md: '16px' }}>
                            {!isGenderFocused ? (<Typography onClick={() => {setIsGenderFocused(true)}}
                            sx={{
                                color: 'white',
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: { xs: '16px', sm: '18px', md: '22px' },
                                lineHeight: '27px',
                            }}>Стать: {gender}</Typography>) : 
                            (<TextField autoFocus 
                                sx={{
                                    color: 'white',
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: { xs: '18px', sm: '20px', md: '24px' },
                                    lineHeight: '1.6', 
                                    '& .MuiInputBase-root': {
                                      '& input': {
                                        color: 'white', 
                                        padding: '8px 0', 
                                      },
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                      borderColor: 'white',
                                    },
                                    '& .MuiInputBase-input': {
                                      caretColor: 'white',
                                    },
                                  }}
                                value={gender}
                                onChange={event => setGender(event.target.value)}
                                onBlur={event => setIsGenderFocused(false)}>
                                </TextField>)}
                        </Grid>
                        <Grid item paddingTop={{ xs: '10px', sm: '12px', md: '16px' }}>
                            {!isMaterialFocused ? (<Typography onClick={() => {setIsMaterialFocused(true)}}
                            sx={{
                                color: 'white',
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: { xs: '16px', sm: '18px', md: '22px' },
                                lineHeight: '27px',
                            }}>Матеріал корпусу: {material}</Typography>) : 
                            (<TextField autoFocus 
                                sx={{
                                    color: 'white',
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: { xs: '18px', sm: '20px', md: '24px' },
                                    lineHeight: '1.6', 
                                    '& .MuiInputBase-root': {
                                      '& input': {
                                        color: 'white', 
                                        padding: '8px 0', 
                                      },
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                      borderColor: 'white',
                                    },
                                    '& .MuiInputBase-input': {
                                      caretColor: 'white',
                                    },
                                  }}
                                value={material}
                                onChange={event => setMaterial(event.target.value)}
                                onBlur={event => setIsMaterialFocused(false)}>
                            </TextField>)}
                        </Grid>
                        <Grid item paddingTop={{ xs: '10px', sm: '12px', md: '16px' }}>
                            {!isStyleFocused ? (<Typography onClick={() => {setIsStyleFocused(true)}}
                            sx={{
                                color: 'white',
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: { xs: '16px', sm: '18px', md: '22px' },
                                lineHeight: '27px',
                            }}>Стиль: {style}</Typography>) : 
                            (<TextField autoFocus 
                                sx={{
                                    color: 'white',
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: { xs: '18px', sm: '20px', md: '24px' },
                                    lineHeight: '1.6', 
                                    '& .MuiInputBase-root': {
                                      '& input': {
                                        color: 'white', 
                                        padding: '8px 0', 
                                      },
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                      borderColor: 'white',
                                    },
                                    '& .MuiInputBase-input': {
                                      caretColor: 'white',
                                    },
                                  }}
                                value={style}
                                onChange={event => setStyle(event.target.value)}
                                onBlur={event => setIsStyleFocused(false)}>
                            </TextField>)}
                        </Grid>
                        <Grid item paddingTop={{ xs: '10px', sm: '12px', md: '16px' }}>
                            {!isQuantityFocused ? (<Typography onClick={() => {setIsQuantityFocused(true)}}
                            sx={{
                                color: 'white',
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: { xs: '16px', sm: '18px', md: '22px' },
                                lineHeight: '27px',
                            }}>Кількість: {quantity}</Typography>) : 
                            (<TextField autoFocus type="number"
                                sx={{
                                    color: 'white',
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: { xs: '18px', sm: '20px', md: '24px' },
                                    lineHeight: '1.6', 
                                    '& .MuiInputBase-root': {
                                      '& input': {
                                        color: 'white', 
                                        padding: '8px 0', 
                                      },
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                      borderColor: 'white',
                                    },
                                    '& .MuiInputBase-input': {
                                      caretColor: 'white',
                                    },
                                  }}
                                value={quantity}
                                onChange={event => setQuantity(event.target.value)}
                                onBlur={event => setIsQuantityFocused(false)}>
                                </TextField>)}
                        </Grid>
                        <Grid item>
                            <FileUpload />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container direction="column" maxWidth="1130px">
            <Grid item paddingTop={{ xs: '30px', sm: '40px', md: '50px' }} >
                {!isDescriptionFocused ? (<Typography onClick={() => {setIsDescriptionFocused(true)}}
                sx={{
                    color: 'white',
                    fontFamily: 'Montserrat',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: { xs: '18px', sm: '20px', md: '22px' },
                    lineHeight: '27px',
                    textAlign: 'center',
                }}>{description}</Typography>) : 
                (<TextField autoFocus 
                    sx={{
                        width: "1130px",
                        color: 'white',
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: { xs: '18px', sm: '20px', md: '24px' },
                        lineHeight: '1.6', 
                        '& .MuiInputBase-root': {
                          '& input': {
                            color: 'white', 
                            padding: '8px 0', 
                          },
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'white',
                        },
                        '& .MuiInputBase-input': {
                          caretColor: 'white',
                        },
                      }}
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                    onBlur={event => setIsDescriptionFocused(false)}>
                </TextField>)}
            </Grid>
            <Grid item justifyContent='center' display='flex' >
                <SaveEditionBtn />
            </Grid>
        </Grid>
    </Grid>
  )
}

export default EditWatchInfo