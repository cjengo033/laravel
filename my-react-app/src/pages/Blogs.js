import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from 'react-hook-form'
import Test from "./Test";
import message from '../assets/message.png';

const Blogs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const search_params = useParams();
  const user_id = search_params.id;
  const [isLoaded, setIsLoaded] = useState(false);
  const [UserData, setItems] = useState([]);
  const [error, setError] = useState(null);


  const GenderUser = UserData.map(function (item, i) {
    const gender = item.gender; //check the gender 
    const GenderCondition = () => {
      if (gender == "female") {
        return (
          <>
            <option selected>{gender}</option>
            <option value="male">male</option>
          </>
        )
      } else {
        return (
          <>
            <option selected>{gender}</option>
            <option value="female">female</option>
          </>
        )
      }
    }
    return (
      GenderCondition()
    )
  })

  const onSubmit = (data) => {

    const obj = { first_name: data.firstName, last_name: data.lastName, gender: data.gender, age: data.age, email: data.email };
    const myJSON = JSON.stringify(obj);

    alert("working");
    fetch(`http://127.0.0.1:8000/api/todo/update/${user_id}`, {

      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: myJSON
    })

    return (
      <>
        <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
          <div class="toast" style="position: absolute; top: 0; right: 0;">
            <div class="toast-header">
              <img src={message}class="rounded mr-2" alt="..."/>
                <strong class="mr-auto">Bootstrap</strong>
                <small>11 mins ago</small>
                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="toast-body">
              Hello, world! This is a toast message.
            </div>
          </div>
        </div>
      </>
    )
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

      <div className="shadow-lg p-3 bg-white rounded m-5">
        <div>

        </div>
        {UserData.map(item => (
          <div>
            <h1 className='mt-5' key={item.id}>Update Data</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  className="form-control"
                  type="text"
                  defaultValue={item.first_name}
                  {...register("firstName", { required: true, maxLength: 30 })}
                />
                {errors.firstName && errors.firstName.type === "required" && <span className="text-danger mt-1">This is required</span>}
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input
                  className="form-control"
                  type="text"
                  defaultValue={item.last_name}
                  {...register("lastName", { required: true, maxLength: 30 })}
                />
                {errors.lastName && errors.lastName.type === "required" && <span className="text-danger mt-1">This is required</span>}
              </div>

              <div className="form-group">
                <label>Age</label>
                <input
                  className="form-control"
                  type="number"
                  defaultValue={item.age}
                  {...register("age", { required: true, maxLength: 30 })}
                />
                {errors.age && errors.age.type === "required" && <span className="text-danger mt-1">This is required</span>}
              </div>

              <div className="form-group">

                <label>Email</label>
                <input
                  className="form-control"
                  defaultValue={item.email}
                  {...register("email", { required: true, maxLength: 30 })}
                />
                {errors.email && errors.email.type === "required" && <span className="text-danger mt-1">This is required</span>}
              </div>

              <div className="form-group">
                <label>Gender</label>
                <select
                  className="custom-select"
                  {...register("gender")}>
                  {GenderUser}
                </select>
                {errors.gender && errors.gender.type === "required" && <span className="text-danger mt-1">This is required</span>}
              </div>

              <input
                type="submit"
                className="btn btn-primary mt-2" />
            </form>
          </div>

        ))}
      </div>
    )


  }

}

export default Blogs