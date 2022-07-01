import PostMessage from "../models/postMessage";

//The post controller will aid in making a simple logic function 
//that can be exported to our routes

//Due to the time it will take to find messages from within our models, this will be a async function 

export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find();

        console.log(postMessages);

        res.status(200).json(postMessages);
    } catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createPost = (req, res) =>{
    res.send('Post Creation');
}