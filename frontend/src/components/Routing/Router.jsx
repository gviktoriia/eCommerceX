import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import MainPage from '../MainPage/MainPage'
import {admin_details_route, checkout_route, details_route, home_route, login_route, men_route, profile_route, shopping_route, signup_route, smart_route, women_route } from './Routes'
import MensWatchPage from '../MensWatchPage/MensWatchPage'
import WomensWatchPage from '../WomensWatchPage/WomensWatchPage'
import SmartWatchPage from '../SmartWatchPage.jsx/SmartWatchPage'
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage'
import ShoppingCartPage from '../ShoppingCartPage/ShoppingCartPage'
import WatchDetailsPage from '../WatchDetailsPage/WatchDetailsPage'
import CheckoutPage from '../CheckoutPage/CheckoutPage'
import ProfilePage from '../ProfilePage/ProfilePage'
import AdminWatchDetailsPage from '../AdminWatchDetailsPage/AdminWatchDetailsPage'

function Router() {
  return (
    <Box>
        <Routes>
            <Route path={home_route} element={<MainPage />}></Route>
            <Route path={men_route} element={<MensWatchPage />}></Route>
            <Route path={women_route} element={<WomensWatchPage />}></Route>
            <Route path={smart_route} element={<SmartWatchPage />}></Route>
            <Route path={login_route} element={<LoginPage />}></Route>
            <Route path={signup_route} element={<SignupPage />}></Route>
            <Route path={shopping_route} element={<ShoppingCartPage />}></Route>
            <Route path={details_route} element={<WatchDetailsPage />}></Route>
            <Route path={checkout_route} element={<CheckoutPage />}></Route>
            <Route path={profile_route} element={<ProfilePage />}></Route>
            <Route path={admin_details_route} element={<AdminWatchDetailsPage />}></Route>
        </Routes>
    </Box>
  )
}

export default Router