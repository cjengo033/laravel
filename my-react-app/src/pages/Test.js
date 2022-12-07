import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Pagination from 'react-bootstrap/Pagination';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaSearchengin } from "react-icons/fa";
const Test = ({ data }) => {
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
          <div class="shadow-lg p-3 mb-5 bg-white rounded">
            <h1>Hello</h1>
          </div>

          <button><a href="/add_students">Add Student</a></button>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Gender</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>


            {currentItems.map((item, index) => (

              <tbody>
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.gender}</td>
                  <td>{item.email}</td>
                  <td>
                    <button className='btn-btn success'>
                      <a href={`/blogs/${item.id}`}  >View</a>
                    </button>

                    <button className='btn-btn danger'>
                      <a href={`/delete/${item.id}`} >Delete</a>
                    </button>
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

      </>
    );
  }

  return (
    <>
      <PaginatedItems itemsPerPage={5} />
    </>
  )
}

export default Test