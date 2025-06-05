import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const validate = () => {
    let err = {};
    if (!form.email) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      err.email = "Email is invalid";
    }
    if (!form.password) err.password = "Password is required";
    return err;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Logged in:", form);
      setLoggedIn(true);
    } else {
      setErrors(validationErrors);
      setLoggedIn(false);
    }
  };
  return (
    <div className=''>
      <div className='row'>
        <div className='col-md-6'>
          <div className='form_wrapper d-flex'>
            <form>
              <h2 className='text-center mb-5'>Login</h2>
                    {loggedIn && <p style={{ color: 'green' }}>Login successful!</p>}

              <div class="form-group pb-3">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

              </div>
              <div class="form-group pb-3">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

              </div>
              <div class="form-group form-check pb-4">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Remember me</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
              <p className='text-center w-100 my-3'>Yes i have an account? <Link to="/sign-up">Signup</Link> </p>
            </form>
          </div>
        </div>
        <div className='col-md-6'>
          <img src='./login_Frame.png' width={'100%'} />
        </div>
      </div>
    </div>
  );
}

export default Login;
