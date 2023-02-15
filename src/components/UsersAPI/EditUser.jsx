import React,{useState} from "react";
import axios from "axios";

const EditUser = ({name, email, users, setUsers, id}) => {
	//this id is of map
	//console.log("this is list of users",users)

	const [isEdit, setIsEdit] = useState(false);

	const handleEdit = () => {
		//made it true
		setIsEdit(!isEdit);

	};

	const handleOnEditSubmit = (e) => {
		// to prevent reloading
		e.preventDefault();
		//i.e. after editing the data, event.target returns the element which is being edited and
		// get targeted to the specific address 
		onEdit(id, e.target.name.value, e.target.email.value);
		setIsEdit(!isEdit);
		//again made it false
	  };

	// Edit Function
	const onEdit =  (id, name, email) => {
		//console.log("this is id =========>",id)
		axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`,{
		  name : name,
		  email : email,
		})
	
		.then((data) => {
		   // console.log("users========>",users)
		  // setUsers((users) => [...users, data])
		  const updatedUsers = users.map((item) =>{
		  
			if (item.id === id) {
			  item.name = name;
			  item.email = email;
			}
			return item;
		  });
		  setUsers(() => updatedUsers);
		})
		.catch((error) =>console.log(error))
	  };

	return (
		<div >

			{isEdit? (
				<form onSubmit={handleOnEditSubmit}>
					<input placeholder="Name" name="name" defaultValue={name} />
					<input placeholder="Email" name="email" defaultValue={email} />
					<button onSubmit={handleOnEditSubmit}>Save</button>
				</form>
			) : (
				<div>
					<button onClick={handleEdit}>Edit</button>
				</div>
			)}
		</div>
	);
};

export default EditUser;
