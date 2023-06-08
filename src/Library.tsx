import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./fontFamily.css";
import closeIcon from "./close-icon.png";

interface Blog {
  title: string;
  author: string;
  launchDate: string;
  image_link: string;
  description: string;
}

const Library: React.FC = () => {
  const [blogs, setBlogs] = useState<any>([]);
  const [blogDescription, setBlogDescription] = useState<string>("");
  const [isClickable, setIsClickable] = useState<boolean>(true);

  console.log(blogs);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    fetch(
      "http://demo.api.admin.circlesnow.com/ProductRESTService.svc/getschedmsg",
      {
        headers: {
          token: "satyam9118130889@gmail.com",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the data
        console.log(data);
        setBlogs(JSON.parse(data.dt));
      })
      .catch((error) => {
        // Handle any errors during API call
        console.error(error);
      });
  };

  const formatLaunchDate = (dateString: string) => {
    if (!dateString) {
      return ""; // Return an empty string or handle the case when the date string is undefined
    }

    const dateParts = dateString.split("T")[0].split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2]);

    const monthNames = [
      "January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];

    const formattedDate = `${monthNames[month - 1]} ${day}, ${year}`;
    return formattedDate;
  };

  return (
    <>
      <section>
        <div className="header">
          <h1> Library </h1>
          <Link to="/NewBlog">
            {" "}
            <button className="btn">New blog</button>
          </Link>
        </div>
        <table
          className="table"
          style={{
            margin: "auto",
            borderSpacing: 0,
            border: "2px solid #F3F3F3",
          }}
        >
          <thead style={{ borderRadius: "3px" }}>
            <tr style={{ backgroundColor: "#F3F3F3" }}>
              <th className="head-cover-image">Cover image</th>
              <th className="head-launch-date">Launchdate</th>
              <th className="head-title">Title</th>
              <th className="head-author">Author</th>
            </tr>
          </thead>
          <tbody>
            {blogs !== null &&
              blogs !== undefined &&
              blogs.map((blog: any) => (
                <tr className="body-row" key={blog.id}>
                  <td className="body-cover-image">
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src={blog.image_lnk}
                    />
                  </td>
                  <td className="body-launch-date">
                    {formatLaunchDate(blog.launchdate)}
                  </td>
                  <td
                    className="body-title "
                    onClick={() => setBlogDescription(blog.description)}
                  >
                    {blog.description}
                  </td>
                  <td className="body-author"> {blog.author}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>


    /* Description box */


      {blogDescription && (
        <div className="description-wrapper">
          <div className="description-box">
            <div className="description-head">
              <h2>Description</h2>
              <img
                style={{ width: "20px", height: "20px" }}
                src={closeIcon}
                alt="Close"
                onClick={() => setBlogDescription("")}
              />
            </div>
            <p className="description-content"> {blogDescription}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Library;
