import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const axios = require('axios').default;

const Blogs = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState();

  console.log(items);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/todo/${4}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="spinner-border justify-content-center" role="status">
      <span class="sr-only">Loading...</span>
    </div>;
  } else {

    return (
      <>

        <table class="table text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th scope="col">Full Name</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <th>{item.id}</th>
                <th>{item.first_name + " " + item.last_name}</th>
                <th>{item.age}</th>
                <th>{item.email}</th>
                <th><FontAwesomeIcon icon="fa-solid fa-trash" />
                  <div>
                    <a href={`/blogs/${item.id}`} className="btn btn-warning">Update</a> &nbsp;
                    <a href={`/blogs/${item.id}`} className="btn btn-danger">Delete</a>
                  </div>
                
                </th>

              </tr>
            ))}







          </tbody>
        </table>



      </>


    );
  }


}
// http://127.0.0.1:8000/api/todo/
export default Blogs;