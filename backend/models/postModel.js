import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		author: {
			type: Number,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		}
	},
	{
		timestamps: true, // createdAt, updatedAt
	}
);

const Post = mongoose.model("Post", postSchema);

export default Post;
