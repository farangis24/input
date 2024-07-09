import React from "react";
import { Validation } from "./components/peges/validation";
import "./app.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className=" app ">
        <form className="" onSubmit={handleSubmit(submit)}>
          <div>
            <input
              placeholder="Username"
              className="input"
              {...register("userName", { required: true })}
              type="text"
            />
            {errors.userName && <p style={{ color: "red" }}>malumot yo'q</p>}
          </div>
          <div>
            <input
              placeholder="Age"
              className="input"
              {...register("age", { required: true })}
              type="number"
            />
            {errors.age && <p style={{ color: "red" }}>malumot yo'q</p>}
          </div>{" "}
          <div>
            <input
              placeholder="Email"
              className="input"
              {...register("Email", { required: true })}
              type="text"
            />
            {errors.email && <p style={{ color: "red" }}>malumot yo'q</p>}
          </div>{" "}
          <div>
            <input
              placeholder="Password"
              className="input"
              {...register("password", { required: true })}
              type="password"
            />
            {errors.password && <p style={{ color: "red" }}>malumot yo'q</p>}
          </div>
          <button className="button" type="submit">
            submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
// <div className="app">
//   <form className="form">
//     <Home placeholder="Username" />
//     <Home placeholder="Email" />
//     <Home placeholder="Full Name" />
//     <Home placeholder="Sth else" />
//   </form>
// </div>
