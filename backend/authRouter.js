import Router from 'express'
import authController from './authController.js'
import {check} from 'express-validator'

const authRouter = new Router()

authRouter.post('/registration', [
    check('username', 'Empty username').notEmpty(), 
    check('password', 'Password must be between 5 to 20 characters').isLength(5,20), 
    ], authController.registration)
authRouter.post('/login',authController.login)
authRouter.get('/user', authController.getUserData)

export default authRouter;