import PostMessage from "../models/postMessage";

//The post controller will aid in making a simple logic function 
//that will be called from the front end

//Due to the time it will take to find messages from within our models, this will be a async function 

export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req, res) =>{
   const post = req.body;

   const newPost = new PostMessage(post);

    try{
        await newPost.save();

        res.status(201).json(newPost);
    } catch(error){
        res.status(404).json({message: error.message});
    }
}