import React from 'react'
import { useState, useEffect } from 'react';

const Students = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState();

    console.log(items);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/todo/show")
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
        return <div>Loading...</div>;
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
                        </tr>
                    </thead>
                    <tbody>
                    {items.map(item => (
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <th>{item.first_name + " " +  item.last_name}</th>
                                <th>{item.age}</th>
                                <th>{item.email}</th>
                            </tr>
                           ))}
                        
                    
                               
                     
                        

                        
                    </tbody>
                </table>



            </>


        );
    }
}
const Student = () => {
    return (
        <>
            <Students />
        </>
    )
}

export default Student