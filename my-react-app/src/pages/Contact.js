import React from 'react'
import message from '../assets/message.png';

const Contact = () => {
  return (
    <>
      <div className='text-center mt-4'>
        <h1>HAVE SOME QUESTIONS?</h1>
        <p><a href="https://github.com/cjengo033">Github Profile</a></p>
      </div>
      <div className='shadow p-3 mb-5 bg-body rounded bg-body rounded d-flex flex-row m-5 align-items-center justify-content-center'>
        
        <div className='mb-5 mt-5 mr-5'>
          <img src={message} alt="first-image.jpg" height={"500dp"} width={"500dp"}/>
        </div>

        <div className=' ml-5 mr-4'>
          <form>
            <div className='form-group'>
              <label>First name</label>
              <input type="text" 
              class="form-control" 
              placeholder='First name'
              aria-label="Sizing example input" 
              aria-describedby="inputGroup-sizing-lg" />
            </div>

            <div className='form-group'>
              <label>Last name</label>
              <input type="text" 
              placeholder='Last name'
              class="form-control" 
              aria-label="Sizing example input" 
              aria-describedby="inputGroup-sizing-lg" />
            </div>

            <div className='form-group'>
              <label>What's your email?</label>
              <input type="text" 
              placeholder='Email'
              class="form-control" 
              aria-label="Sizing example input" 
              aria-describedby="inputGroup-sizing-lg" />
            </div>


            <div className='form-group'>
              <label>Concern:</label>
              <textarea rows="4" cols="50" name="comment" form="usrform" className='form-control form-control-sm' placeholder='Message...'/>
            </div>
            <button className='btn btn-dark mt-4 p-3'>SEND MESSAGE</button>

          </form>

        </div>


      </div>

    </>
  )
}

export default Contact