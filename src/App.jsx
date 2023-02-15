import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import DisplayComment from "./components/CommentsAPI/DisplayComment";
import DisplayUser from "./components/UsersAPI/DisplayUser";
import DisplayPost from "./components/PostsAPI/DisplayPost";

function App() {

  return (
    <BrowserRouter>
      <div className="App">

        <Link to="/users">
          <button>Move to Users Page</button>
        </Link>

        <Link to="/posts">
          <button>Move to Post Page</button>
        </Link>

        <Link to="/comments">
          <button>Move to Comments Page</button>
        </Link>

        <Routes>
          <Route exact path="/users" element={<DisplayUser />} />
          <Route exact path="/posts" element={<DisplayPost />} />
          <Route exact path="/comments" element={<DisplayComment />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
