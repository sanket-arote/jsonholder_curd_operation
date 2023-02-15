import React, { useState } from "react";
import axios from "axios";

const AddUser = ({ users, setUsers }) => {
	const [user, setUser] = useState('');

	let name, value;
	// name=key value=value just like json format
	const handleInputs = (e) => {
		// console.log(e);
		name = e.target.name;
		value = e.target.value;

		setUser({ ...user, [name]: value });

	};

	const handleAdd = (e) => {
		e.preventDefault();
		const { name, email } = user;

		axios.post("https://jsonplaceholder.typicode.com/users", {
				id: users[users.length -1] + 1,
				name,
				email,
			})
			.then((res) => {
				console.log(res);
				res.data.id = users.length + 1;
				setUsers([...users, res.data]);
				// setUser((user)=>[...user,res])
			})
			.catch((error) => console.log(error));

		// to make input fileds again empty
		user.name = "";
		user.email = "";

	};

	return (
		<div>
			<h3> To Add User</h3>
			<form>
				<input
					type="text"
					placeholder="Name"
					name="name"
					value={user.name}
					onChange={handleInputs}
				/>
				<input
					type="email"
					placeholder="Email"
					name="email"
					value={user.email}
					onChange={handleInputs}
				/>
				<button onClick={handleAdd}>Add</button>
			</form>
			<hr />
		</div>
	);
};

export default AddUser;
