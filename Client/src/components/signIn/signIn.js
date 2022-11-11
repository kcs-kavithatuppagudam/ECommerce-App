import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {Navigate} from 'react-router-dom'
import axios from "axios";


export const SignIn = () => {
    const [token,setToken]=useState('')
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const submitHandler = (data) => {
    axios.post("http://localhost:4000/login/",data)
      .then((res) => {
        localStorage.setItem("token",res.data.token);
        setToken(res.data.token)
      })
      .catch((err) => {
        console.log(err);
      });    
  };
 
  return (
    <div className="container m-2 p-2">
      <div className="row m-5">
        <div className="col-lg-5 offset"></div>
        <div className="col-lg-4">
          <Form
            style={{
              border: "2px solid black",
              borderRadius: "15px",
              padding: "20px",
              margin: "30px",
            }}
            onSubmit={handleSubmit(submitHandler)}
            autoComplete="off"
          >
            <Form.Group>
              <Form.Label style={{ textAlign: "left", marginRight: "200px" }}>
                EmailId
              </Form.Label>
              <div>
                <Form.Control
                  type="email"
                  placeholder="Enter EmailId"
                  {...register("emailid", { required: "Emailid is required" })}
                />
                <p style={{ color: "tomato" }}>
                  {errors.emailid && errors.emailid.message}
                </p>
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label style={{ textAlign: "left", marginRight: "200px" }}>
                Password
              </Form.Label>
              <div>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <p style={{ color: "tomato" }}>
                  {errors.password && errors.password.message}
                </p>
              </div>
            </Form.Group>
            <Form.Group>
              <div>
                <input
                  type="submit"
                  value="Signin"
                  className="btn btn-primary m-2"
                  style={{ width: "100px" }}
                  
                />
                <a
                  className="btn btn-primary m-2"
                  style={{ width: "100px" }}
                  href="/register"
                >
                  Register
                </a>
              </div>
            </Form.Group>
          </Form>
        </div>
        <div className="col-lg-3 offset"></div>
      </div>
      {
        token && <Navigate to='/dashboard'/>
      }
    </div>
   
  );
};

export default SignIn;
