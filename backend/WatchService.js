import WatchDetails from "./models/WatchDetails.js";

class WatchService{
    async create(watch) {
        const newWatch = await WatchDetails.create(watch);
        return newWatch;
    }
    async getAll(){
        const watches = await WatchDetails.find();
        return watches;
    }
    async getById(id){
        if(!id){
            throw  new Error('No ID')
        }
        const watch = await WatchDetails.findById(id);
        return watch;
    }
    async update(watch){
        const updatedWatch = await WatchDetails.findByIdAndUpdate(watch._id, watch,{new:true});
        return updatedWatch;
    }
    async delete(id){
        if(!id){
            throw new Error('No ID');
        }
        const watch = await WatchDetails.findByIdAndDelete(id)
        return watch
    }
    async getByNameSubstring(message){
        if(!message){
            throw new Error('No message');
        }
        const watches = await WatchDetails.find({name: {$regex: new RegExp("^" + message.toLowerCase(), "i")}});
        return watches;
    }
    async getBySex(message){
        if(!message){
            throw new Error('No message');
        }
        const watches = await WatchDetails.find({sex: {$eq: message}});
        return watches;
    }
    async getByStyle(message){
        if(!message){
            throw new Error('No message');
        }
        const watches = await WatchDetails.find({style: {$eq: message}});
        return watches;
    }
 
}

export default new WatchService();