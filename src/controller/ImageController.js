const Image = require('../models/Image');


class ImageController {
    async create(req, res) {
        const { originalname, size, filename } = req.file;
        try {
            const image = await Image.create({
                name: originalname,
                size: size.toString(),
                key: filename,
                url: ''
             });
             res.json(image);
        } catch (error) {
            console.log(error);
            res.json('error')
        }
    }

}


module.exports = new ImageController();