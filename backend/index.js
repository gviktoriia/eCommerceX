import express from 'express'
import mongoose from 'mongoose'
import Grid from 'gridfs-stream'
import router from "./router.js"
import authRouter from './authRouter.js';
import roleMiddleware from './middleware/roleMiddleware.js'
import cors from 'cors'
import checkoutRouter from './checkoutRouter.js';

const PORT = 8888;
const DB_URL = 'mongodb+srv://user:user@cluster0.ksqusty.mongodb.net/?retryWrites=true&w=majority';
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use('/auth', authRouter)
app.use('/checkout', checkoutRouter)

async function start() {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("connected to database");
        app.listen(PORT, () => console.log("Server started on port " + PORT));
    } catch (e) {
        console.log(e);
    }
}

start();

// operate with images
let gfs;

const conn = mongoose.connection;
conn.once("open", function () {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("uploads");
});

app.get("/file/:filename", async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename });
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
    } catch (error) {
        res.send("not found");
    }
});

app.delete("/file/:filename", [
    roleMiddleware(['ADMIN'])
], async (req, res) => {
    try {
        await gfs.files.deleteOne({ filename: req.params.filename });
        res.send("success");
    } catch (error) {
        console.log(error);
        res.send("An error occured.");
    }
});