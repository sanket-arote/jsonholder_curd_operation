import React from 'react'
import axios from 'axios'

const DeleteComment = ({id, comments, setComments}) => {


    
	// Delete Function
	const handleDelete = () => {
		axios
			.delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
			.then((res) => {
				// console.log("done");
				console.log(res);

				// setUsers([...users, res.data]);
				if (res.status !== 200) {
					return;
				} else {
					setComments(
						// used filter because is need to filter user with id
						comments.filter((item) => {
							//console.log(user)
							return item.id !== id;
						})
					);
				}
			})
			
			.catch((error) => {
				console.log(error);
			});

		// onDelete(id);
		// console.log("data deleted", users);
	};
  return (
    <div>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default DeleteComment