import secret from './config.js';
import jwt from 'jsonwebtoken'
import Guest from './models/Guest.js';
import Receipt from './models/Receipt.js';
import WatchService from './WatchService.js';

class CheckoutController {
    async buy(req, res) {
        try {
            // check end date, card number, cvv, email, phone number, name and adress
            if (req.body.username === '' || req.body.adress === '' ||
                req.body.cardNumber === '' || req.body.endDate === '' ||
                req.body.cvv === '' ||
                (req.body.email === '' && req.body.phoneNumber === '')) {
                res.status(400).json({ message: "not filled nessessary fields" })
                return
            }


            const watches = req.body.items
            // watch id is a key to watch quantity
            let uniqueIds = []
            let idQuantity = {}
            for (let i = 0; i < watches.length; i++) {
                if (watches[i]._id in idQuantity) {
                    idQuantity[watches[i]._id]++
                } else {
                    idQuantity[watches[i]._id] = 1
                    uniqueIds.push(watches[i]._id)
                }
            }
            for (let i = 0; i < watches.length; i++) {
                const watch = await WatchService.getById(watches[i]._id)
                if (watch.quantity < idQuantity[watches[i]._id]) {
                    res.status(400).json({ message: "not enouth items in stock" })
                    return
                    //console.log('error')
                }
            }
            // check header if it is user
            let userId
            try {
                const token = req.headers.authorization.split(' ')[1]
                const { id } = jwt.verify(token, secret)
                userId = id
            } catch (e) {
                // save as a guest
                const guest = new Guest({
                    username: req.body.username,
                    email: req.body.email,
                    phoneNumber: req.body.phoneNumber,
                    adress: req.body.adress
                })
                await guest.save()
                userId = guest._id
            }
            // create receipt
            let sum = 0
            for (let i = 0; i < watches.length; i++) {
                sum += watches[i].price
            }
            const receipt = new Receipt({
                date: Date(),
                items: watches,
                sum: sum,
                clientID: userId
            })
            await receipt.save()
            // update quantity of items
            for (let i = 0; i < uniqueIds.length; i++) {
                const oldWatch = await WatchService.getById(uniqueIds[i]) 
                const uploadObject = {
                    _id: uniqueIds[i],
                    quantity: oldWatch.quantity - idQuantity[uniqueIds[i]],
                }
                const updatedWatch = await WatchService.update(uploadObject);
                console.log(updatedWatch)
            }
            res.status(200).json(receipt)

        } catch (error) {
            res.status(500).json(error)
           //console.log(error)
        }
    }
}

export default new CheckoutController();