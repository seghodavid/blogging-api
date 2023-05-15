const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"]
    },
    body: {
        type: String,
        required: [true, "Blog post cannot be empty"]
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        requireed: [true, "Creator cannot be blank"]
    }
}, {timestamps: true })


module.exports = mongoose.model('Post', PostSchema)