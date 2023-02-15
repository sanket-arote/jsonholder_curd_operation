import React, { useState } from "react";
import axios from "axios";

const AddComment = ({ comments, setComments }) => {
	const [comment, setComment] = useState({
		name: "",
		email: "",
	});
	let name, value;
	const handleInputs = (e) => {
		// console.log(e);
		name = e.target.name;
		value = e.target.value;
		setComment({ ...comment, [name]: value });
	};

	const handleAdd = (e) => {
		e.preventDefault();
		const { name, email } = comment;

		axios
			.post("https://jsonplaceholder.typicode.com/comments", {
				id: comments[comments.length -1] + 1,
				name,
				email,
			})

			.then((res) => {
				console.log(res);
				res.data.id = comments.length + 1;
				setComments([...comments, res.data]);
				// setUser((user)=>[...user,res])
			})
			.catch((error) => console.log(error));

		comment.name = "";
		comment.email = "";
	};

	return (
		<div>
			<h3> To Add Comment</h3>
			<form>
				<input
					type="text"
					placeholder="Name"
					name="name"
					value={comment.name}
					onChange={handleInputs}
				/>
				<input
					type="email"
					placeholder="Email"
					name="email"
					value={comment.email}
					onChange={handleInputs}
				/>
				<button onClick={handleAdd}>Add</button>
			</form>
			<hr />
		</div>
	);
};

export default AddComment;
