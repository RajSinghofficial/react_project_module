import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    let err = {}
    if (!form.name.trim()) err.name = "Name is required"
    if(!form.email) {
      err.email = "Email is validate"
    }
  }
  return (
    <div className=''>
      <div className='row'>
        <div className='col-md-6'>
          <img src='./signup_Frame.png' height={'auto'} />
        </div>
        <div className='col-md-6'>
          <div className='form_wrapper d-flex'>
            <form style={{ marginLeft: 'inherit' }}>
              <h2 className='text-center mb-5'>Sign Up</h2>
              <div class="form-group pb-3">
                <label for="exampleInputEmail1">Full name:</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div class="form-group pb-3">
                <label for="exampleInputEmail1">Email address:</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div class="form-group pb-3">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <button type="submit" class="btn btn-primary">Register</button>
              <p className='text-center w-100 my-3'>Yes i have an account? <Link to="/">Login</Link> </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
