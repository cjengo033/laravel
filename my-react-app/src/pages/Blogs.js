import { useState, useEffect, useForm } from "react";
import { useParams } from "react-router-dom";

const Blogs = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState();

  const [numbers, setItems] = useState();

  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState()
  const [email, setEmail] = useState();
  const search_params = useParams();
  const user_id = search_params.id;


  console.log(first_name);


  const submit_edit = (e) => {
    alert("working");
    fetch(`http://127.0.0.1:8000/api/todo/update/${user_id}`, {

      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        gender: gender,
        age: age,
        email: email
      })

    })

    e.preventDefault();

  }

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
        {numbers.map(item => (
          <div className="shadow-sm p-5 m-10 bg-white rounded" key={item.id}>
            <form onSubmit={submit_edit}>

              <div className="form-group">
                <label>First name</label>
                <input type="text"
                  onChange={e => setFirstName(e.target.value) ? setFirstName(e.target.value) : item.first_name }
                  defaultValue={item.first_name}
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
                  defaultValue={item.last_name}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>

              <div className="form-group">
                <label>Gender</label>
                <input type="text"
                  onChange={e => setGender(e.target.value)}
                  defaultValue={item.gender}
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