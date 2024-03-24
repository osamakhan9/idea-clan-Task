import mongoose from "mongoose";

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
// import  SECRET_KEY  from "./config/db.js";
const SECRET_KEY = "SECRET1234" 
const User = mongoose.model("User");
const Post = mongoose.model("Post");

const resolvers = {

	Query:{
		user:async () => await User.find({}),
        user:async (_,{_id}) => await User.find({_id}),
		posts:async () => await Post.find({}).populate("by","_id name"),
		ipost:async (_,{by}) => await Post.find({by}) 
	},
	User:{
		posts:async (ur) => await Post.find({by:ur._id}),
	},

	Mutation:{
		signupUser: async(_,{userNew})=>{
			const user = await User.findOne({email:userNew.email})
			if(user){
				throw new Error("User already exists!");
			}
			const hashedPassword = await bcrypt.hash(userNew.password,12)

			const newUser = new User({
				...userNew,
				password:hashedPassword
			})
			return await newUser.save()
		},

		loginUser: async(_,{userLogin})=>{
			const user = await User.findOne({email:userLogin.email})
			if(!user){
				throw new Error('User not found!')
		}
		const match =await bcrypt.compare(userLogin.password,user.password)
		if(!match){
			throw new Error('Wrong password!')
		}
		const token = jwt.sign({userId:user._id},SECRET_KEY)
		return{token:token}
		},

		createPost: async (_,{name},{userId})=>{
          if(!userId){
			throw new Error('Not logged in!');
		  }
		 const newPost = new Post({
			name,
			by:userId
		  })
		  await newPost.save()
		  return "Post created successfully"
		}
	}
}

export default resolvers