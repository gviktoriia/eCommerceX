import Router from 'express'
import CheckoutController from './checkoutController.js'

const checkoutRouter = new Router()

checkoutRouter.post('/buy',CheckoutController.buy)


export default checkoutRouter;