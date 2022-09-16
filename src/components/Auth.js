import React from 'react';

export default function Auth() {

  // handleChange = (e) => {

  // }

  // handelSubmit = (e) => {

  // }

    return (
        <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>UserName</label>
              <input
                type="username"
                className="form-control mt-1"
                placeholder="Enter UserName"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter Password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
        <div>
          OR SIGN UP
        </div>
        <form className="Sign-Up-form">
          <div className="Sign-Up-form-content">
            <h3 className="Sign-Up-form-title">Sign Up</h3>
            <div className="Sign-Up-group mt-3">
              <label>UserName</label>
              <input
                type="UserName"
                className="form-control mt-1"
                placeholder="Enter UserName"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter Password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Sign Up!
              </button>
            </div>
          </div>
        </form>
      </div>
    )
};