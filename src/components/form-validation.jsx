import React, { useEffect, useState } from "react";

const FormComponents = () => {
  // useState for inputs
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // useState for errors
  const [userErr, setUserErr] = useState({
    firstNameErr: false,
    lastNameErr: false,
    emailErr: false,
    passwordErr: false,
    confirmPasswordErr: false,
  });

  const signInHandler = (e) => {
    e.preventDefault();
    if (
      userDetails.firstName === "" &&
      userDetails.lastName === "" &&
      userDetails.email === "" &&
      userDetails.password === "" &&
      userDetails.confirmPassword === ""
    ) {
      setUserErr({
        firstNameErr: true,
        lastNameErr: true,
        emailErr: true,
        passwordErr: true,
        confirmPasswordErr: true,
      });
    }
    if(userDetails.password !== userDetails.confirmPassword){
     setUserErr({...userErr, confirmPasswordErr:true});
    }
    console.log(userDetails);
  };

  useEffect(() => {
    if (userDetails.firstName !== "") {
      setUserErr({...userErr, firstNameErr:false});
    }
    if(userDetails.lastName !== ""){
      setUserErr({...userErr, lastNameErr:false});
    }
    if (userDetails.email !== "") {
      setUserErr({...userErr, emailErr: false });
    }
    if (userDetails.password !== "") {
      setUserErr({...userErr, passwordErr: false });
    }
    if(userDetails.confirmPassword !== ""){
      setUserErr({...userErr, confirmPasswordErr:false});
    }
  }, [userDetails]);

  

  return (
    <>
      <div className="w-25 m-auto mt-5">
        <main className="form-signin w-100 m-auto">
          <form onSubmit={signInHandler}>
            <h1 className="h3 fw-bold mb-3 fw-normal text-center">
              Form With Validation
            </h1>

            {/* First Name */}
            <div className="form-floating mt-2">
              <input
                type="text"
                className="form-control"
                style={{ border: userErr.firstNameErr && "1px solid red" }}
                id="floatingInput"
                placeholder="Name"
                value={userDetails.firstName}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, firstName: e.target.value });
                }}
              />
              <label htmlFor="floatingInput">First Name</label>
              {userErr.firstNameErr && (
                <span className="text-danger">Enter your First Name</span>
              )}
            </div>

            {/* Last Name */}
            <div className="form-floating mt-2">
              <input
                type="text"
                className="form-control"
                style={{ border: userErr.lastNameErr && "1px solid red" }}
                id="floatingInput"
                placeholder="Name"
                value={userDetails.lastName}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, lastName: e.target.value });
                }}
              />
              <label htmlFor="floatingInput">Last Name</label>
              {userErr.lastNameErr && (
                <span className="text-danger">Enter your Last Name</span>
              )}
            </div>

            {/* Email */}
            <div className="form-floating mt-2">
              <input
                type="email"
                className="form-control"
                style={{ border: userErr.emailErr && "1px solid red" }}
                id="floatingInput"
                placeholder="name@example.com"
                value={userDetails.email}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, email: e.target.value });
                }}
              />
              <label htmlFor="floatingInput">Email address</label>
              {userErr.emailErr && (
                <span className="text-danger">Enter your Email</span>
              )}
            </div>

            {/* Password */}
            <div className="form-floating mt-2">
              <input
                type="password"
                className="form-control"
                style={{ border: userErr.passwordErr && "1px solid red" }}
                id="floatingPassword"
                placeholder="Password"
                value={userDetails.password}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, password: e.target.value });
                }}
              />
              <label htmlFor="floatingPassword">Password</label>
              {userErr.passwordErr && (
                <span className="text-danger">Enter your Password</span>
              )}
            </div>

            {/* Confirm Password  */}
            <div className="form-floating mt-2">
              <input
                type="password"
                className="form-control"
                style={{ border: userErr.confirmPasswordErr && "1px solid red" }}
                id="floatingPassword"
                placeholder="Password"
                value={userDetails.confirmPassword}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, confirmPassword: e.target.value });
                }}
              />
              <label htmlFor="floatingPassword">Confirm Password</label>
              {userErr.confirmPasswordErr && (
                <span className="text-danger">Enter your Confirm Password</span>
              )}
            </div>

            <button
              className="btn fs-5 btn-warning fw-medium w-100 py-2 mt-4"
              type="submit"
            >
              Sign in
            </button>
          </form>
        </main>
      </div>
    </>
  );
};

export default FormComponents;
