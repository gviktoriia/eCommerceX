import multer from 'multer'
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new  GridFsStorage({
    url: 'mongodb+srv://user:user@cluster0.ksqusty.mongodb.net/?retryWrites=true&w=majority',
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-watch-${file.originalname}`;
            return filename;
        }

        return {
            bucketName: "uploads",
            filename: `${Date.now()}-watch-${file.originalname}`,
        };
    },
});

export default multer({storage})