import React, { useState } from "react";
import './fontFamily.css'


const NewBlogForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [launchdate, setLaunchDate] = useState("");
  const [image_link, setImage_link] = useState("");
  const [description, setDescription] = useState("");
  const [blogs, setBlogs] = useState<Blog[]>([]);

  // console.log(title)


  interface Blog {
    title: string;
    author: string;
    launchdate: string;
    image_link: string;
    description: string;
  }




  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

   

    const newBlog = {
      "title":title,
      "author":author,
      "launchdate":launchdate,
      "image_link":image_link,
      "description":description,
    };

    
    
   
    setTitle("");
    setAuthor("");
    setLaunchDate("");
    setImage_link("");
    setDescription("");

    
    // try {
    //   const response = await fetch('/http://demo.api.admin.circlesnow.com/ProductRESTService.svc/schedMsg', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'token':'satyam9453963823@gmail.com'
    //     },
    //     body: JSON.stringify(newBlog),
    //   }
    //   );

    //   if (response.ok) {
    //     // Redirect back to the Library page after successful submission
    //     console.log('done')
    //     window.location.href = '/library';
    //   } else {
    //     console.error('Error creating blog:', response.statusText);
    //   }
    // } catch (error) {
    //   console.error('Error creating blog:', error);
    // }

    const url = 'http://demo.api.admin.circlesnow.com/ProductRESTService.svc/schedMsg'; // Replace with your API endpoint URL

// Data to be sent in the request body as JSON


// Options for the fetch request
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'token':'satyam9118130889@gmail.com'
  },
  body: JSON.stringify(newBlog)
};

// Make the API call
fetch(url, options)
  .then(response => response.json())
  .then(data => {
    // Handle the response data
    console.log(data);
    window.location.href = './';
  })
  .catch(error => {
    // Handle any errors that occur during the API call
    console.error('Error:', error);
  });
  };


  return (
    <div style={{backgroundColor:"#F4F6F6 "}} >
      <h1 style={{backgroundColor:"#212F3D ",marginLeft:"50px",marginRight:"50px", color:"white", padding:"20px",  boxShadow: "6px 6px 6px 6px grey"}}>New Blog</h1>

      <div className="section">
        <form style={{width:"250px",transform:"translate(30%,0%)" }}  onSubmit={handleSubmit}>
         
            <div >
              <label className="label" style={{display:"block"}}  htmlFor="title">
                Title
              </label>
              <input className="input"
                type="text"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="eg.Mountaineer"
                required
                style={{ width: "250px", height: "30px", borderRadius: "4px"   }}
              />
            </div>
            <br />
            <div>
              <label className="label" style={{ display: "block" }} htmlFor="author">
                Author
              </label>
              <input className="input"
                type="text"
                id="author"
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="eg.Satyam Singh"
                required
                style={{ width: "250px", height: "30px", borderRadius: "4px" }}
              />
            </div>
            <br />
            <div>
              <label className="label" style={{ display: "block" }} htmlFor="author">
                Launch Date
              </label>
              <input className="input"
                type="text"
                id="launchDate"
                onChange={(e) => setLaunchDate(e.target.value)}
                placeholder="eg.November 03, 2023"
                required
                style={{ width: "250px", height: "30px", borderRadius: "4px" }}
              />
            </div>
            <br />
            <div>
              <label className="label"
                style={{ display: "block" }}
                htmlFor="author"
              >
                Image Link
              </label>
              <input className="input"
                type="text"
                id="image_link"
                onChange={(e) => setImage_link(e.target.value)}
                placeholder="eg.https://pixabay.com/images/"
                required
                style={{ width: "250px", height: "30px", borderRadius: "4px" }}
              />
            </div>
            <br />
            <div>
              <label className="label"
                style={{ display: "block",  }}
                htmlFor="author"
              >
                Description
              </label>
              <textarea className="input"
                id="description"
              
                onChange={(e) => setDescription(e.target.value)}
                placeholder="eg.Hi!! Iam a Mountaineer"
                required
                style={{ width: "250px", height: "50px", borderRadius: "4px" }}
              />
            </div>
          
          <div style={{ textAlign: "center" }}>
   
              <button
                className="btn btn-primary"
                style={{ margin: "0 auto", marginTop: "10px" }}
                type="submit">
                Submit
              </button>
       
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewBlogForm;
