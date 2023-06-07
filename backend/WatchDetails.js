import mongoose from 'mongoose'

const WatchDetailsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    manufacturer: {type: String, required: true},
    sex: {type: String, required: true},
    material: {type: String, required: true},
    style:{type: String, required: true},
    price:{type: String, required: true},
    quantity:{type: String, required: true},
    image:{
        data: Buffer,
        contentType: String
    },
    description:{type: String, required: true}
})

export default mongoose.model('WatchDetails', WatchDetailsSchema)