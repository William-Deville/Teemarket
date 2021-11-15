const mongoose = require('mongoose');

const PosterSchema = new mongoose.Schema(
    {
        /*picture: {
            type: String,
            required: true,
        },*/
        description: {
            type: String,
            trim: true,
            maxlength: 250
        },
        price: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('poster', PosterSchema);