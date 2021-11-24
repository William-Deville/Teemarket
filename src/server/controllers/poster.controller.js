const PosterModel = require('../models/poster.model');
const uploadErrors = require('../utils/errors.utils');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports.readPoster = (req, res) => {
    PosterModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log('Error to get data : ' + err);
    })
}

module.exports.createPoster = async (req, res, next) => {
    const newPoster = new PosterModel({
        picture: req.file.path,
        name: req.body.name,
    });

    try {
        const poster = await newPoster.save();
        return res.status(201).json(poster);
    } catch (err) {
        return res.status(400).send(err);
    }
};


module.exports.updatePoster = (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('ID unknow : ' + req.params.id);

    const updatedRecord = {
        picture: req.body.picture,
        name: req.body.name,
    }

    PosterModel.findByIdAndUpdate(
        req.params.id,
        { $set: updatedRecord },
        { new: true },
        (err, docs) => {
            if(!err) res.send(docs);
            else console.log("Update error : " + err);
        }
    )
}

module.exports.deletePoster = (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('ID unknow : ' + req.params.id);

        PosterModel.findByIdAndRemove(
            req.params.id,
            (err, docs) => {
                if(!err) res.send(docs);
                else console.log("Delete error : " + err);
            }
            )
}

module.exports.upload = (req, res) => {
    try {
        console.log(req.files)
        res.json('test upload')
    } catch (err) {
        res.status(500).json({msg: err.message})
    }
}