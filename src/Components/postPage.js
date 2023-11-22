import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import "../Css/Cardstyle.css";
const PostPage = () => {
  const [postsData, setpostsData] = useState([]);

  const history = useNavigate();
  useEffect(() => {
    async function getData() {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setpostsData(response.data);

    }
    getData()
  }, [])
console.log(postsData);
  return (
    <>
     {
     postsData && postsData.length > 0 ? 
     
        <div className="work-container">

          <div className="project-container">
            <div className="project-card">

              <h2 className="project-title"> </h2>
              <div className="pro-details">
             


                <div className="pro-btns">

                  <a href='/' target='_blank' className="btn">View</a>
                </div>
              </div>
            </div>

          </div>

        </div >
    
     :<></>}

    </>
  )
}

export default PostPage