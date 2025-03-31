import mongoose from "mongoose";
import Post from "../models/postModel.js";

export const getPosts = async (req, res) => {
	try {
		const posts = await Post.find({});
		res.status(200).json({ success: true, data: posts });
	} catch (error) {
		console.log("error in fetching posts:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const createPost = async (req, res) => {
	const post = req.body; // user will send this data

	if (!post.name || !post.price || !post.image) {
		return res.status(400).json({ success: false, message: "Please provide all fields" });
	}

	const newPost = new Post(post);

	try {
		await newPost.save();
		res.status(201).json({ success: true, data: newPost });
	} catch (error) {
		console.error("Error in Create post:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const updatePost = async (req, res) => {
	const { id } = req.params;

	const post = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid post Id" });
	}

	try {
		const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
		res.status(200).json({ success: true, data: updatedPost });
	} catch (error) {
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

/*export const getEditPage = async (req, res) => {
	try{
        const post = await Post.findById(req.params.id)
        res.send(post)
    }catch(err){
        console.log(err)
    }
}*/

export const getPost = async (req, res) => {
	try{
        const post = await Post.findById(req.params.id)
        res.send(post)
    }catch(err){
        console.log(err)
    }
}

export const editPost = async(req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    try {
      await Post.findByIdAndUpdate(req.params.id, req.body);
      //res.redirect('/');
    } catch(err) {
      console.log(err);
    }

}



export const deletePost = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid post Id" });
	}

	try {
		await Post.findByIdAndDelete(id);
		res.status(200).json({ success: true, message: "post deleted" });
	} catch (error) {
		console.log("error in deleting post:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};
