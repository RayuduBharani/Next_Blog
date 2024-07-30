import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    comment: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts',
    },
}, { timestamps: true });

const commentModel = mongoose.models.comments || mongoose.model('comments', commentSchema);

export default commentModel;
