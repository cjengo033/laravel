import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Pagination from 'react-bootstrap/Pagination';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaTrash, FaSearchengin } from "react-icons/fa";
const Student = ({ data }) => {
    // Example items, to simulate fetching from another resources.
    const user_data = ["Carl", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [student_data, setItems] = useState([]);


    const result = Object.values(student_data);

    console.log(result);

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

    function Items({ currentItems }) {
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="spinner-border justify-content-center" role="status">
                <span className="sr-only">Loading...</span>
            </div>;
        } else {
            return (
                <>

                    <button className='btn btn-primary m-2'><a href="/add_students">Add Student</a></button>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>


                        {currentItems.map((item, index) => (

                            <tbody>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.gender}</td>
                                    <td>
                                        <div className=''>
                                            <a href={`/blogs/${item.id}`}  ><FaSearchengin /></a>
                                            <a className='link-light' href={`/delete/${item.id}`} ><FaTrash /></a>
                                        </div>



                                    </td>


                                </tr>

                            </tbody>



                        ))}
                    </table>

                </>
            );
        }
    }

    function PaginatedItems({ itemsPerPage }) {
        // Here we use item offsets; we could also use page offsets
        // following the API or data you're working with.
        const [itemOffset, setItemOffset] = useState(0);

        // Simulate fetching items from another resources.
        // (This could be items from props; or items loaded in a local state
        // from an API endpoint with useEffect and useState)
        const endOffset = itemOffset + itemsPerPage;
        // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        const currentItems = student_data.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(student_data.length / itemsPerPage);


        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % student_data.length;
            console.log(
                `User requested page number ${event.selected}, which is offset ${newOffset}`
            );
            setItemOffset(newOffset);
        };

        return (
            <>
                <div class="shadow-lg p-3 m-5 bg-white rounded">
                    <Items currentItems={currentItems} />
                    <Pagination>
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel={<FaArrowAltCircleRight />}
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel={<FaArrowAltCircleLeft />}
                            renderOnZeroPageCount={null}
                            containerClassName={'pagination'}
                        />
                    </Pagination>
                </div>


            </>
        );
    }

    return (
        <>
            <PaginatedItems itemsPerPage={5} />
        </>
    )
}

export default Student