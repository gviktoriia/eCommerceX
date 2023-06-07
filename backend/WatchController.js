import WatchDetails from "./WatchDetails.js";
import WatchService from "./WatchService.js";

class WatchController {
    async create(req,res) {
        try {
            const watch = await WatchService.create(req.body)
            res.status(200).json(watch);
        } catch (e){
            res.status(500).json(e)
        }
    }
    async getAll(req,res){
        try {
            const watches = await WatchService.getAll();
            return res.json(watches)
        } catch (e){
            res.status(500).json(e)
        }
    }
    async get(req,res){
        try {
            const {id} = req.params
            const watch = await WatchService.getById(id)
            return res.json(watch)
        } catch (e){
            res.status(500).json(e)
        }
    }
    async update(req,res){
        try {
            const updatedWatch = await WatchService.update(req.body);
            return res.json(updatedWatch)
        } catch (e){
            res.status(500).json(e)
        }
    }
    async delete(req,res){
        try {
            const watch = await WatchService.delete(req.params.id);
            return res.json(watch)
        } catch (e){
            res.status(500).json(e)
        }
    }
    async findBySubstring(req,res) {
        try {
            const watches = await WatchService.getByNameSubstring(req.params.substring);
            return res.json(watches)
        } catch (e){
            res.status(500).json(e)
        }
    }
    async findBySex(req,res) {
        try {
            const watches = await WatchService.getBySex(req.params.sex);
            return res.json(watches)
        } catch (e){
            res.status(500).json(e)
        }
    }
    async findByStyle(req,res) {
        try {
            const watches = await WatchService.getByStyle(req.params.style);
            return res.json(watches)
        } catch (e){
            res.status(500).json(e)
        }
    }
}

export default new WatchController();