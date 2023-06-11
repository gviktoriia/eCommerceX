import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email:{type: String, required: false},
    phoneNumber:{type: String, required: false},
    adress:{type: String, required: false},
    cartNumber:{type: String, required: false},
    roles: [{type:String, ref:'Role'}]
})

export default mongoose.model('User', UserSchema)