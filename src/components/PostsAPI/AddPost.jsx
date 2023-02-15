import React, { useState } from "react";
import axios from "axios";


const AddPost = ({ posts, setPosts }) => {
	const [post, setPost] = useState({
		title: "",
		body: "",
	});
	let name, value;
	const handleInputs = (e) => {
		// console.log(e);
		name = e.target.name;
		value = e.target.value;
		setPost({ ...post, [name]: value });
	};

	const handleAdd = (e) => {
		e.preventDefault();
		const { title, body } = post;

		axios.post("https://jsonplaceholder.typicode.com/posts", {
				id: posts[posts.length -1] + 1,
				title,
				body
			})

			.then((res) => {
				console.log(res);
				res.data.id = posts.length + 1;
				setPosts([...posts, res.data]);
				// setUser((user)=>[...user,res])
			})
			.catch((error) => console.log(error));

		post.title = "";
		post.body = "";
	};

	return (
		<div>
			<h3> To Add Post</h3>
			<form>
				<input
					type="text"
					placeholder="Title"
					name="title"
					value={post.title}
					onChange={handleInputs}
				/>
                
				<input
					type="text"
					placeholder="Body"
					name="body"
					value={post.body}
					onChange={handleInputs}
				/>
				<button onClick={handleAdd}>Add</button>
			</form>
			<hr />
		</div>
	);
};

export default AddPost;
