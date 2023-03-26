import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
const RegisterPage = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleFormOnChange = (e) => {
    const newInput = { ...formValue, [e.target.name]: e.target.value };
    setFormValue(newInput);
  };

  const register = async (input) => {
    try {
      let { data } = await axios({
        url: `http://localhost:3000/register`,
        method: "post",
        data: input,
      });
      navigate("/login");
    } catch (error) {
      throw error;
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    register(formValue)
      .then(() => {})
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.response.data.message}`,
        });
      });
  };
  return (
    <>
      <div className="login-section vh-100 pt-5">
        <div className="container-fluid h-custom pt-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <div className="pb-4">
                <h2>
                  <span style={{ color: "grey" }}>Register</span> Page.
                </h2>
              </div>
              <Form onSubmit={handleRegister}>
                <div className="form-outline mb-4">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleFormOnChange}
                  />
                </div>
                <div className="form-outline mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    name="password"
                    onChange={handleFormOnChange}
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label"> Remember me </label>
                  </div>
                </div>
                <div className="text-center text-lg-start mt-3 pt-2">
                  <Button variant="secondary px-4" type="submit">
                    Login
                  </Button>
                </div>
              </Form>
            </div>
            <div className="image-login col-md-9 col-lg-6 col-xl-5 d-flex">
              <img
                src="https://i.pinimg.com/474x/39/bd/e6/39bde6a0e9811e24cab9079086b28c3d.jpg"
                className="img-fluid rounded mx-auto w-75"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
