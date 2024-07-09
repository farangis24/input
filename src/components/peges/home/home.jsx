import React from "react";
import "./home.css";

export const Home = () => {
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
      <form className="" onSubmit={handleSubmit(submit)}>
        <div>
          <input
            placeholder="Username"
            {...register("userName", { required: true })}
            type="text"
          />
          {errors.userName && <p style={{ color: "red" }}>malumot yo'q</p>}
        </div>{" "}
        <div>
          <input
            placeholder="Age"
            {...register("age", { required: true })}
            type="number"
          />
          {errors.age && <p style={{ color: "red" }}>malumot yo'q</p>}
        </div>{" "}
        <div>
          <input
            placeholder="Email"
            {...register("Email", { required: true })}
            type="text"
          />
          {errors.email && <p style={{ color: "red" }}>malumot yo'q</p>}
        </div>{" "}
        <div>
          <input
            placeholder="Password"
            {...register("password", { required: true })}
            type="password"
          />
          {errors.password && <p style={{ color: "red" }}>malumot yo'q</p>}
        </div>{" "}
        <button type="submit">submit</button>
      </form>
    </>
  );
};
