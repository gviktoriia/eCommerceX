import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import LoginTextField from '../../LoginPage/LoginTextField'
import AddItemPhoto from './AddItemPhoto'
import FileUpload from './FileUpload'

function AddItemDialog({ open, onClose }) {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState(null);
    const [manufacturer, setManufacturer] = React.useState('');
    const [sex, setSex] = React.useState('');
    const [material, setMaterial] = React.useState('');
    const [style, setStyle] = React.useState('');
    const [quantity, setQuantity] = React.useState('');
    const [image, setImage] = React.useState(null);
    const [description, setDescription] = React.useState(null);
    const handleName = (text) => {
        setName(text)
    }
    const handlePrice = (text) => {
        setPrice(text)
    }
    const handleManufacturer = (text) => {
        setManufacturer(text)
    }
    const handleSex = (e) => {
        e.preventDefault()
        setSex(e.target.value)
    }
    const handleMaterial = (text) => {
        setMaterial(text)
    }
    const handleStyle = (text) => {
        setStyle(text)
    }
    const handleQuantity = (text) => {
        setQuantity(text)
    }
    const handleImage = (e) => {
        e.preventDefault()
        setImage(e.target.files[0])
    }
    const handleDescription = (text) => {
        setDescription(text)
    }
    
    const handleClick = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('name',name)
        formData.append('manufacturer',manufacturer)
        formData.append('sex',sex)
        formData.append('material',material)
        formData.append('style',style)
        formData.append('price',price)
        formData.append('quantity',quantity)
        formData.append('image',image)
        formData.append('description',description)

        const url = "http://localhost:8888/api/watches";
        fetch(url, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: formData
        }).then(res => {
            return res.json()
        }).then(data => {
           console.log(data)
        })
            .catch(error => console.log('error'))
    }
    return (
        <Dialog open={open} >
            <DialogTitle sx={{
                backgroundColor: '#171A25',
                color: 'white',
                fontFamily: 'Montserrat',
                fontSize: '22px',
                fontWeight: '500',
                justifyContent: 'center',
                display: 'flex',
            }}>Додати товар</DialogTitle>
            <DialogContent sx={{
                backgroundColor: '#171A25',
                height: 1,
                overflowY: "overlay",
                "@media (hover: hover)": {
                    "&": { overflowY: "hidden", overflowX: "hidden" },
                    "&:hover, &:active": {
                        overflowY: "overlay",
                        overflowX: "overlay",
                    },
                    "&::-webkit-scrollbar": {
                        width: "5px",
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "transparent",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "black",
                        borderRadius: 8,
                        border: "5px solid rgba(0, 0, 0, 0)",
                        backgroundClip: "padding-box",
                    },
                },
            }}>
                <Box sx={{
                    backgroundColor: "#171A25",
                    height: "fit-content",
                }}>
                    <LoginTextField title="Назва товару" type="text" onChange={handleName}/>
                    <LoginTextField title="Ціна" type="number" onChange={handlePrice}/>
                    <LoginTextField title="Бренд" type="text" onChange={handleManufacturer}/>
                    <FormControl sx={{ m: 1, minWidth: 120, }}>
                        <InputLabel sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '24px',
                            lineHeight: '29px',
                            color: '#4D4D4D'
                        }}>Стать</InputLabel>
                        <Select onChange={handleSex} labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Стать" sx={{
                                color: 'white',
                                border: "1px solid #4D4D4D",
                                borderRadius: "10px",
                                width: { xs: 210, sm: 390, md: 420, xl: 450 },
                                marginBottom: '40px',
                                justifyContent: 'center'
                            }}
                            inputProps={{
                                style: {
                                    color: 'white',
                                },
                            }}>
                            <MenuItem value='male'>Чоловічі</MenuItem>
                            <MenuItem value='female'>Жіночі</MenuItem>
                            <MenuItem value='unisex'>Універсальні</MenuItem>
                        </Select>
                    </FormControl>
                    <LoginTextField title="Матеріал корпусу" type="text" onChange={handleMaterial}/>
                    <LoginTextField title="Стиль" type="text"onChange={handleStyle} />
                    <LoginTextField title="Опис" type="text" onChange={handleDescription}/>
                    <LoginTextField title="Кількість" type="number" onChange={handleQuantity}/>
                    <Grid container direction="row">
                        <Grid item>
                            <AddItemPhoto />
                        </Grid>
                        <Grid item>
                            <FileUpload handleFile={handleImage} />
                        </Grid>
                    </Grid>
                </Box>
            </DialogContent>
            <DialogActions sx={{
                backgroundColor: '#171A25',
            }}>
                <Button variant='outlined' onClick={onClose}
                    sx={{
                        color: "white",
                        justifyContent: 'center',
                        borderColor: "white",
                        fontFamily: "Montserrat",
                        fontSize: '22px',
                        fontWeight: "500px",
                        textTransform: 'none',
                        width: 'fit-content',
                        height: '40px',
                        borderRadius: '40px',
                        marginTop: '20px',
                        marginBottom: '30px',
                        "&:hover": {
                            backgroundColor: "white",
                            color: 'black',
                        },
                    }}>Скасувати</Button>
                <Button onClick={handleClick} variant='outlined'
                    sx={{
                        color: "white",
                        justifyContent: 'center',
                        borderColor: "white",
                        fontFamily: "Montserrat",
                        fontSize: '22px',
                        fontWeight: "500px",
                        textTransform: 'none',
                        width: 'fit-content',
                        height: '40px',
                        borderRadius: '40px',
                        marginTop: '20px',
                        marginBottom: '30px',
                        "&:hover": {
                            backgroundColor: "white",
                            color: 'black',
                        },
                    }}>Зберегти</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddItemDialog