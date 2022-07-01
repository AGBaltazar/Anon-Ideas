import mongoose from 'mongoose';


//In mongoDB a schema allows us to create uniformity within each post
//this schema will be the templates for the posts
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0 
    }
});

//This schema will be saved as a mongoose model and then export it
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;