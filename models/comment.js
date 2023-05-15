const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, 'blank comments cannot be sent']
    },
    postId: {
        type: mongoose.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    commenter: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
})



module.exports = mongoose.model('Comment', CommentSchema)
