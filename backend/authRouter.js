import Router from 'express'
import authController from './authController.js'
import { check } from 'express-validator'
import roleMiddleware from './middleware/roleMiddleware.js'

const authRouter = new Router()

authRouter.post('/registration', [
    check('username', 'Empty username').notEmpty(),
    check('password', 'Password must be between 5 to 20 characters').isLength(5, 20),
], authController.registration)
authRouter.post('/login', authController.login)
authRouter.post('/guest', authController.guestRegistration)
// authRouter.get('/guest/:id', authController.getGuestData)
authRouter.get('/user', authController.getUserData)
authRouter.post('/user', [
    roleMiddleware(['ADMIN','USER'])
], authController.updateUser)


export default authRouter;