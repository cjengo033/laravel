import React from 'react'
import { useParams } from "react-router-dom";

const Delete = () => {
const search_params = useParams();
const user_id = search_params.id;
const url = "/test";
console.log(user_id)

fetch(`http://127.0.0.1:8000/api/todo/del/${user_id}`, { method: 'DELETE' })
    .then(() => window.location.href = url);

  return <div  role="status">
        <h1>Deleting the data</h1>
  </div>
}

export default Delete