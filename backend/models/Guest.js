import mongoose from 'mongoose'

const GuestSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email:{type: String, required: false},
    phoneNumber:{type: String, required: false},
    adress:{type: String, required: false}
})

export default mongoose.model('Guest', GuestSchema)