import React from "react";
import { Link } from "react-router-dom";

import "./Main.scss";
import uris from "../../../Config/Router/URI";
import Blog from "./Assets/blog.png";

const blogs = [
  {
    id: 1,
    date: 1684157335,
    image: Blog,
    title: "Get Zero Commision car Insurance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus purus sed tristique hendrerit. Proin nunc nisl, fermentum ac ipsum aliquam, luctus efficitur ipsum. Nullam nisi justo, scelerisque in bibendum dignissim, pharetra eu ante. ",
    link: "",
  },
  {
    id: 2,
    date: 1684157335,
    image: Blog,
    title: "Get Zero Commision car Insurance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus purus sed tristique hendrerit. Proin nunc nisl, fermentum ac ipsum aliquam, luctus efficitur ipsum. Nullam nisi justo, scelerisque in bibendum dignissim, pharetra eu ante. ",
    link: "",
  },
  {
    id: 3,
    date: 1684157335,
    image: Blog,
    title:
      "A win-win scenario is reported by Business Travel Show for both travel manages and staff.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus purus sed tristique hendrerit. Proin nunc nisl, fermentum ac ipsum aliquam, luctus efficitur ipsum. Nullam nisi justo, scelerisque in bibendum dignissim, pharetra eu ante. ",
    link: "",
  },
  {
    id: 4,
    date: 1684157335,
    image: Blog,
    title:
      "A win-win scenario is reported by Business Travel Show for both travel manages and staff",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus purus sed tristique hendrerit. Proin nunc nisl, fermentum ac ipsum aliquam, luctus efficitur ipsum. Nullam nisi justo, scelerisque in bibendum dignissim, pharetra eu ante. ",
    link: "",
  },
  {
    id: 5,
    date: 1684157335,
    image: Blog,
    title: "Get Zero Commision car Insurance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus purus sed tristique hendrerit. Proin nunc nisl, fermentum ac ipsum aliquam, luctus efficitur ipsum. Nullam nisi justo, scelerisque in bibendum dignissim, pharetra eu ante. ",
    link: "",
  }
];

const BlogMain = () => {
  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <div className="blogs-section">
        {blogs.map((item) => {
          return (
            <div className="blog-card" key={item.id}>
              <img src={item.image} alt="Blog" />
              <div className="text-area">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <Link to={uris.blog}>
                <div className="button">Read More</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogMain;
