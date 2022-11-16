import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Blogs = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState();
  const [name, setName] = useState();
  const [last_name, setLastName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();

  const search_params = useParams();
  const user_id = search_params.id;

  

  const handleSubmit = (e) => {
  console.log(name);
    

    // const user_data = 
    //   {
    //     "first_name": name,
    //     "last_name" : last_name, 
    //     "age": age,
    //     "email": email
    //   }
    // if(user_data) {
    
    //   console.log(user_data);
    // }
    
    // // POST request using fetch with error handling
    // const element = document.querySelector('#post-request-error-handling .article-id');
    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(user_data)
    // };
    // fetch(`http://127.0.0.1:8000/api/todo/update/${user_id}`, requestOptions)
    //   .then(async response => {
    //     const isJson = response.headers.get('content-type')?.includes('application/json');
    //     const data = isJson && await response.json();

    //     // check for error response
    //     if (!response.ok) {
    //       // get error message from body or default to response status
    //       const error = (data && data.message) || response.status;
    //       return Promise.reject(error);
    //     }

    //     element.innerHTML = data.id;
    //   })
    //   .catch(error => {
    //     // element.parentElement.innerHTML = `Error: ${error}`;
    //     console.error('There was an error!', error);
    //   });
  }

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/todo/${user_id}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.Data);
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
      <span className="sr-only">Loading...</span>
    </div>;
  } else {

    return (
      <>
        {items.map(item => (
          <div className="shadow-sm p-5 m-10 bg-white rounded" key={item.id}>
            <form onSubmit={handleSubmit()}>

              <div className="form-group">
                <label>First name</label>
                <input type="text"
                  onChange={e => setName(e.target.value)}
                  value={item.first_name}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>

              <div className="form-group">
                <label>Last name</label>
                <input type="text"
                  onChange={e => setLastName(e.target.value)}
                  defaultValue={item.first_name}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>


              <div className="form-group">
                <label>Age</label>
                <input type="number"
                  onChange={e => setAge(e.target.value)}
                  defaultValue={item.age}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>

              <div className="form-group">
                <label >Email address</label>
                <input type="email"
                  onChange={e => setEmail(e.target.value)}
                  defaultValue={item.email}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email" />
              </div>

              <button className="btn btn-primary">Submit Contact</button>
            </form>
          </div>
        ))}
      </>

    );
  }

}

export default Blogs;