import { useState } from "react";
import { useForm } from "react-hook-form";


const AddStudent = () => {
    // const { register } = useForm();
    // const [data, setData] = useState("");
    const axios = require('axios').default;
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const user = { first_name, last_name, gender, age, email };
    const convert_json = JSON.stringify(user);


    console.log(convert_json);
    const doSomething = function (e) {
        alert('it works!');
        fetch('http://127.0.0.1:8000/api/todo/add?', {
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

    return (
        <>
            <div class="shadow-lg p-3 m-5 bg-white rounded">
                <h1>Add Student</h1>
                <form onSubmit={doSomething}>

                    <div className="form-group">
                        <label>First name</label>
                        <input type="text"
                            onChange={e => setFirstName(e.target.value)}

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

                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter email" />
                    </div>

                    <button className="btn btn-primary">Submit Contact</button>
                </form>
            </div>

        </>
    )
}

export default AddStudent