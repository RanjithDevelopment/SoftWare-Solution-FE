import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../Css/table.css';
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
      <br />
      <br />
      <br />

      <div className='tableContainer'>
        <table>
          <tr>

            <th>Title</th>
            <th>Body</th>

            <th>Actions</th>
          </tr>
          {postsData.map((data) => {

            return (
              <tbody key={data.id}>
                <tr >
                  <td>{data.title}</td>


                  <td>{data.body.split(" ").slice(0,50).join(" ")}</td>
                  <td>
                    <Link
                      className='edit'
                      to=" " state={data} >
                      View
                    </Link>

                  </td>
                </tr>
              </tbody>
            )
          })}

        </table>

      </div>



    </>
  )
}

export default PostPage