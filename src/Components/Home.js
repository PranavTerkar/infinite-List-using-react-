import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";
import { LoadingPosts } from "./LoadingPosts";
import { Posts } from "./Posts";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  
  return (
    <div className="home">
      <div className="title">
        <h1>Welcom {user?.email}</h1>
      </div>
      <p>
        Dear User Please be patient <br /> It takes quite time to load down
        there
      </p>
      {/* <LoadingPosts/> */}
      <Posts />
    </div>
  );
}

export default Home;
