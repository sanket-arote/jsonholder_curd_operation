import React, { useState, useEffect } from "react";
import axios from "axios";
import AddPost from "./AddPost";
import EditPost from "./EditPost";
import DeletePost from "./DeletePost";

const DisplayPost = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          setPost(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, []);

  return (
    <div>
      <AddPost posts={post} setPosts={setPost} />
      <table border={1}>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
          <th>Option 1</th>
          <th>Option 2</th>
        </tr>
        {post.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
            <td>
              <EditPost
                posts={post}
                setPosts={setPost}
                id={item.id}
                name={item.title}
                email={item.body}
              />
            </td>
            <td>
              <DeletePost 
                posts={post} 
                setPosts={setPost} 
                id={item.id} 
               />
            </td>
          </tr>
        ))}
      </table>

    </div>
  );
};

export default DisplayPost;
