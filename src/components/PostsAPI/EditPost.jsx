import React,{useState} from "react";
import axios from "axios";

const EditPost = ({title, body, posts, setPosts, id}) => {
	//console.log("this is list of users",users)

	const [isEdit, setIsEdit] = useState(false);

	const handleEdit = () => {
		setIsEdit(!isEdit);
	};

	const handleOnEditSubmit = (e) => {
		// to prevent reloading
		e.preventDefault();
		//i.e. after editing the data, event.target returns the element which is being edited and
		// get targeted to the specific address 
		onEdit(id, e.target.title.value, e.target.body.value);
		setIsEdit(!isEdit);
	  };

	// Edit Function
	const onEdit =  (id, title, body) => {
		//console.log("this is id =========>",id)
		axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
	
		  title : title,
		  body : body,
		})
	
		.then((data) => {
		   // console.log("users========>",users)
		  // setUsers((users) => [...users, data])
		  const updatedPosts = posts.map((item) =>{
		  
			if (item.id === id) {
			  item.title = title;
			  item.body = body;
			}
			return item;
		  });
		  setPosts(() => updatedPosts);
		})
		.catch((error) =>console.log(error))
	  };

	return (
		<div >

			{isEdit? (
				<form onSubmit={handleOnEditSubmit}>
					<input placeholder="Title" name="title" defaultValue={title} />
					<input placeholder="Body" name="body" defaultValue={body} />
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

export default EditPost;
