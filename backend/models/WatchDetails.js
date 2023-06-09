import mongoose from 'mongoose'

const WatchDetailsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    manufacturer: {type: String, required: true},
    sex: {type: String, required: true},
    material: {type: String, required: true},
    style:{type: String, required: true},
    price:{type: Number, get: getPrice, set: setPrice, required: true},
    quantity:{type: Number, required: true},
    image:{type: String, required: true},
    description:{type: String, required: true}
})
function getPrice(num){
    return (num/100).toFixed(2);
}

function setPrice(num){
    return num*100;
}

export default mongoose.model('WatchDetails', WatchDetailsSchema)