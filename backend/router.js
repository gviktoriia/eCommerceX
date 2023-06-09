import Router from 'express'
import multer from 'multer'
import path from 'path'
import WatchController from "./WatchController.js";
import upload from './middleware/upload.js'
import roleMiddleware from './middleware/roleMiddleware.js'

const router = new Router()

router.post('/watches',[
    upload.single('image'),
    roleMiddleware(['ADMIN'])
    ], WatchController.create)
router.get('/watches', WatchController.getAll)
router.get('/watches/:id',WatchController.get)
router.get('/watches/substring/:substring', WatchController.findBySubstring)
router.get('/watches/sex/:sex', WatchController.findBySex)
router.get('/watches/style/:style', WatchController.findByStyle)
router.put('/watches',[
    upload.single('image'),
    roleMiddleware(['ADMIN'])
    ], WatchController.update)
router.delete('/watches/:id',[
    roleMiddleware(['ADMIN'])
    ], WatchController.delete)


export default router;