import WatchDetails from "./middleware/WatchDetails.js";
import WatchService from "./WatchService.js";
import fs from 'fs'

class WatchController {
    async create(req,res) {
        try {
            if (req.file === undefined) return res.send("you must select a file.");
            const imgUrl = `http://localhost:8888/file/${req.file.filename}`;
            const uploadObject = {
                name: req.body.name,
                manufacturer: req.body.manufacturer,
                sex: req.body.sex,
                material: req.body.material,
                style:req.body.style,
                price:req.body.price,
                quantity:req.body.quantity,
                image:imgUrl,
                description: req.body.description
            }
            const watch = await WatchService.create(uploadObject)
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
            if (!(req.file === undefined)) {
                const imgUrl = `http://localhost:8888/file/${req.file.filename}`;
                const uploadObject = {
                    _id:req.body._id,
                    name: req.body.name,
                    manufacturer: req.body.manufacturer,
                    sex: req.body.sex,
                    material: req.body.material,
                    style:req.body.style,
                    price:req.body.price,
                    quantity:req.body.quantity,
                    image:imgUrl,
                    description: req.body.description
                }
                const updatedWatch = await WatchService.update(uploadObject);
                return res.json(updatedWatch)
            } else {
                const updatedWatch = await WatchService.update(req.body);
                return res.json(updatedWatch)
            }
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