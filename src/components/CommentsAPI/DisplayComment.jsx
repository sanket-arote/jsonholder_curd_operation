import React, { useState, useEffect } from "react";
import axios from "axios";
import AddComment from "./AddComment";
import EditComment from "./EditComment";
import DeleteComment from "./DeleteComment";

const DisplayComment = () => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((res) => {
          setComment(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, []);

  return (
    <div>
      <AddComment comments={comment} setComments={setComment} />
      <table border={1}>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Option 1</th>
          <th>Option 2</th>
        </tr>
        {comment.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
              <EditComment
                comments={comment}
                setComments={setComment}
                id={item.id}
                name={item.name}
                email={item.email}
              />
            </td>
            <td>
              <DeleteComment comments={comment} setComments={setComment} id={item.id} />
            </td>
          </tr>
        ))}
      </table>

    </div>
  );
};

export default DisplayComment;
