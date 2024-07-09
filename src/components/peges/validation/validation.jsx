import { useState } from "react";
import React from "react";
export const Validation = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const hendleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = "Username is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "email is required";
    } else if (!/\s+@\s\.\s+/.test(formData.email)) {
      validationErrors.email = "email is not valid";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "password must be at Least 6 characters";
    }
    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "password not match";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("form submitted");
    }
    return (
      <>
        <form onSubmit={hendleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              placeholder="example@gmail.com"
              autoComplete="off"
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" placeholder="******" />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="******"
            />
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  };
};
