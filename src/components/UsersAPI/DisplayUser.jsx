import React, { useState, useEffect } from "react";
import axios from "axios";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";

const DisplayUser = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setUser(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
  },[]);

  return (
    <div>
      <AddUser users={user} setUsers={setUser} />
      <table border={1}>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Option 1</th>
          <th>Option 2</th>
        </tr>
        {user.map((item) => (
            //item is variable used to map the data
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
              <EditUser
                users={user}
                setUsers={setUser}
                id={item.id}
                name={item.name}
                email={item.email}
              />
            </td>
            <td>
              <DeleteUser 
                users={user} 
                setUsers={setUser} 
                id={item.id} 
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default DisplayUser;
