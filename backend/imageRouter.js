import Router from 'express'
import roleMiddleware from './middleware/roleMiddleware.js'

const imageRouter = new Router()

// operate with images
imageRouter.get("/:filename", async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename })
        const readStream = gfs.createReadStream(file.filename)
        readStream.pipe(res)
    } catch (error) {
        res.send("not found");
    }
})

imageRouter.delete("/:filename",[
    roleMiddleware(['ADMIN'])
    ], async (req, res) => {
    try {
        await gfs.files.deleteOne({ filename: req.params.filename })
        res.send("success")
    } catch (error) {
        console.log(error)
        res.send("An error occured.");
    }
})

export default imageRouter
