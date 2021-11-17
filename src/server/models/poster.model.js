const mongoose = require('mongoose');

const PosterSchema = new mongoose.Schema(
    {
        picture: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('poster', PosterSchema);