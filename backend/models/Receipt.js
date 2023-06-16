import mongoose from 'mongoose'

const ReceiptSchema = new mongoose.Schema({
    date:{type: String, required: true},
    items: [{type:String, ref:'WatchDetails'}],
    sum:{type: Number, required: true},
    clientID:{type: String, required: true},
    // clientEmail:{type: String, required: true} // in case a client hasn't registered
})

export default mongoose.model('Receipt', ReceiptSchema)