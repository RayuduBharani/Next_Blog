import mongoose, { Model, Schema } from "mongoose";
import { IPost } from "../types";

const postSchema :Schema<IPost> = new mongoose.Schema({
    userId :{
        type: String,
        ref : 'users',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, { timestamps: true })

const postModel : Model<IPost> = mongoose.models.posts || mongoose.model("posts", postSchema);

export default postModel;
