const Image = require('../models/Image');
const fs = require('fs');
const path = require('path');


class ImageController {
    async create(req, res) {
        const { originalname, size, filename, destination } = req.file;
        const bitmap = fs.readFileSync(`tmp/uploads/${filename}`)
        const buffer =  Buffer.from(bitmap, 'base64');

        const image = await Image.create({ key: filename, name: originalname, size, buffer });
        res.json(image.buffer.toString('base64'));
    }

    async show(req, res) {

        const { id } = req.params;

        const image = await Image.findByPk(id);

        res.json(image.buffer.toString('base64'));
    }


}


module.exports = new ImageController();