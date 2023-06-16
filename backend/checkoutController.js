import secret from './config.js';
import jwt from 'jsonwebtoken'
import Guest from './models/Guest.js';
import Receipt from './models/Receipt.js';

class CheckoutController{
    async buy(req,res){
        try {
            // ?check end date, card number, cvv?
            // check item quantity - if not enough - return error
            // check header if it is user
            // if not - register guest
            // create receipt and update quantity of items, return 200
    
            const watches = req.body.items
            // watch id = key to watch quantity
            let idQuantity = {}
            for (let i = 0; i < watches.length; i++) {
                if (watches[i]._id in idQuantity) {
                    idQuantity[watches[i]._id]++
                } else {
                    idQuantity[watches[i]._id] = 1
                }
            }
            for (let i = 0; i < watches.length; i++) {
                if (watches[i].quantity < idQuantity[watches[i]._id]) {
                    res.status(400).json({ message: "error" })
                    console.log('error')
                }
            }
            // check header if it is user
            let userId
            try {
                const token = req.headers.authorization.split(' ')[1]
                const { id } = jwt.verify(token, secret)
                console.log(id)
                userId = id
            } catch (e) {
                console.log('register guest')
                const guest = new Guest({
                    username:req.body.username,
                    email: req.body.email,
                    phoneNumber: req.body.phoneNumber,
                    adress:req.body.adress
                })
                await guest.save()
                userId = guest._id
            }
            // console.log(req.body)
            console.log(userId)
            // create receipt and update quantity of items, return 200
            let sum = 0
            for(let i = 0; i < watches.length; i++){
                sum += watches[i].price
            }
            console.log(Date())
            const receipt = new Receipt({
                date: Date(),
                items: watches,
                sum: sum,
                clientID:userId
            })
            await receipt.save()
            res.status(200).json(receipt)
    
        } catch (error) {
            res.status(500).json(error)
            console.log(error)
        }
    }
}

export default new CheckoutController();