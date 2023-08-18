import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"
import '../App.css';

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  
  return (
    <div className="main">
      <div className="container a-container" id="a-container">
        <form className="form" id="a-form" method="post" onSubmit={handleSubmit}>
          <h2 className="form_title title">Create Account</h2>
          <input className="form__input" type="text" placeholder="Name" name="username" value={username} onChange={handleOnChange} />
          <input className="form__input" type="text" placeholder="Email" name="email"  value={email} onChange={handleOnChange}/>
          <input className="form__input" type="password" placeholder="Password" name="password" value={password} onChange={handleOnChange}/>
          <button className="form__button button switch-btn" type="submit" name="signup">SIGN UP</button>
        </form>
      </div>

      <div className="switch" id="switch-cnt">
      <div className="switch__circle"></div>
      <div className="switch_circle switch_circle--t"></div>
        <div className="switch__container" id="switch-c1">
          <h2 className="switch__title title">Welcome Back !</h2>
          <p className="switch__description description">
            Already have an account please login
          </p>
          <Link to={"/login"}><button className="switch__button button switch-btn" >LOGIN</button></Link>
        </div>
        </div>
        <ToastContainer />
    </div>
  );
};

export default Signup;