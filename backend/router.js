import Router from 'express'
import WatchController from "./WatchController.js";

const router = new Router()

router.post('/watches', WatchController.create)
router.get('/watches', WatchController.getAll)
router.get('/watches/:id',WatchController.get)
router.get('/watches/substring/:substring', WatchController.findBySubstring)
router.get('/watches/sex/:sex', WatchController.findBySex)
router.get('/watches/style/:style', WatchController.findByStyle)
router.put('/watches', WatchController.update)
router.delete('/watches/:id',WatchController.delete)


export default router;