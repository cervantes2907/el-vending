import React from "react";
import "./Details.css";
import { posts } from "../data";
import { useLocation } from "react-router-dom";
const Details = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const post = posts.find((p) => p.id.toString() === path);
  return (
    <div className="cardDetails">
      <div className="content-img">
        <img src={post.image} alt={post.title} className="cardDetails-img" />
      </div>
      <div className="content-text-details">
        <h1 className="cardDetals-title">{post.title}</h1>
        <p className="cardDetails-longDescription">{post.longDescription}</p>
      </div>
    </div>
  );
};

export default Details;
