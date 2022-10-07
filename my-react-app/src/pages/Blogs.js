import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const axios = require('axios').default;

const Blogs = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();

  console.log(items);

  const handleSubmit = () => {
    const user = [
      {
        "name": name,
        "age" : age,
        "email": email
      }
    ] 

    console.log(user);
  }



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

        <div className="shadow-sm p-5 m-10 bg-white rounded">
          <form onSubmit={handleSubmit()}>
            <div class="form-group">
              <label for="exampleInputEmail1">Full name</label>
              <input type="email"
                value={setName}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>


            <div class="form-group">
              <label for="exampleInputEmail1">Age</label>
              <input type="email"
                value={setAge}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
              <label >Email address</label>
              <input type="email"
                
                onChange={setEmail}
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email" />
            </div>

            <button className="btn btn-primary">Submit Contact</button>
          </form>
        </div>

      </>


    );
  }


}
// http://127.0.0.1:8000/api/todo/
export default Blogs;