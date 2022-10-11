import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const axios = require('axios').default;

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        email : '',
        password : ''
    });


    const handleSubmit = (e) => {
        fetch('http://127.0.0.1:8000/api/authentication/login', {
            method: 'POST',
            body: JSON.stringify({
              "email" : email,
              "password" : password

            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
             .then((response) => response.json())
             .then((data) => {
                console.log(data);
                // Handle data
             })
             .catch((err) => {
                console.log(err.message);
             });
    }

    return (
        <>

            <div className="shadow-sm p-5 m-10 bg-white rounded">
                <form onSubmit={handleSubmit()}>

                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email"
                            onChange={e => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter email..." />
                    </div>

                    <div className="form-group">
                        <label >Password</label>
                        <input type="password"
                            onChange={e => setPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter password..." />
                    </div>

                    <button className="btn btn-primary">Login</button>
                </form>
            </div>

        </>


    );
}

export default Login;