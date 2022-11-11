import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const submitHandler = (data) => {
    if (data.password !== data.confirmpassword) {
      toast.error("passwords donot match", {
        position: "top-center",
        autoClose: 5000,
      });
    } else {
      axios.post("http://localhost:4000/register/",data)
        .then((res) => {
          toast.success(res.data, {
            position: "top-center",
            autoClose: 5000,
          });

        if(res.data==='registered sucessfully'){
            setTimeout(()=>{
                reset()
            },3000)
        }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <div className="container m-1 p-2">
        <div className="row">
          <div className="col-lg-5 offset"></div>
          <div className="col-lg-4 ">
            <Form
              style={{
                border: "2px solid black",
                borderRadius: "15px",
                padding: "20px",
                margin: "30px",
              }}
              onSubmit={handleSubmit(submitHandler)}
            >
              <Form.Group>
                <Form.Label style={{ textAlign: "left", marginRight: "280px" }}>
                  Username
                </Form.Label>
                <div>
                  <Form.Control
                    placeholder="Enter name"
                    {...register("uname", {
                      required: "Name is required",
                      minLength: {
                        value: 4,
                        message:
                          "please provide value that is atleast 4 characters",
                      },
                    })}
                  />
                  <p style={{ color: "tomato" }}>
                    {errors.uname && errors.uname.message}
                  </p>
                </div>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ textAlign: "left", marginRight: "280px" }}>
                  EmailId
                </Form.Label>
                <div>
                  <Form.Control
                    type="email"
                    placeholder="Enter EmailId"
                    {...register("emailid", {
                      required: "Email is required",
                      pattern: {
                        value:`[a-z0-9]+@[a-z]+/.[a-z]{2,3}`,
                        message: "This is not valid emailid",
                      },
                    })}
                  />
                  <p style={{ color: "tomato" }}>
                    {errors.emailid && errors.emailid.message}
                  </p>
                </div>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ textAlign: "left", marginRight: "280px" }}>
                  Password
                </Form.Label>
                <div>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 4,
                        message: "password must be morethan 4 characters",
                      },
                      maxLength: {
                        value: 8,
                        message: "password must not be morethan 8 characters",
                      },
                    })}
                  />
                  <p style={{ color: "tomato" }}>
                    {errors.password && errors.password.message}
                  </p>
                </div>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ textAlign: "left", marginRight: "180px" }}>
                  Confirm Password
                </Form.Label>
                <div>
                  <Form.Control
                    type="password"
                    placeholder="Confirm password"
                    {...register("confirmpassword", {
                      required: "Confirm Password is required",
                      minLength: {
                        value: 4,
                        message:
                          "confirm password must be morethan 4 characters",
                      },
                      maxLength: {
                        value: 8,
                        message:
                          "confirm password must not be morethan 8 characters",
                      },
                    })}
                  />
                  <p style={{ color: "tomato" }}>
                    {errors.confirmpassword && errors.confirmpassword.message}
                  </p>
                </div>
              </Form.Group>
              <Form.Group>
                <p>
                  <Form.Control
                    type="submit"
                    value="Register"
                    className="btn btn-primary m-2"
                    style={{ width: "100px" }}
                  />
                  <a
                  className="btn btn-primary m-2"
                  style={{ width: "100px" }}
                  href="/"
                >
                  SignIn
                </a>
                </p>
                
              </Form.Group>
            </Form>
          </div>
          <div className="col-lg-3 offset"></div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
